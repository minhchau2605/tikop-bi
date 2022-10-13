<script setup>
import { useTemplateStore } from "@/stores/template";

import BaseLayout from "@/layouts/BaseLayout.vue";
import BaseNavigation from "@/components/BaseNavigation.vue";
import BaseFilter from "@/layouts/partials/Filter.vue";
import BaseFilterSideOverlay from "@/layouts/partials/FilterSideOverlay.vue";

// Grab example data
import notifications from "@/data/notifications";

// Main store
const store = useTemplateStore();

// Grab menu navigation arrays
import menu from "@/data/menu_starter";

const navigation = menu.main;

// Set default elements for this layout
store.setLayout({
  header: true,
  sidebar: true,
  sideOverlay: true,
  footer: true,
});

// Set various template options for this layout variation
store.headerStyle({ mode: "light" });
store.mainContent({ mode: "full" });
</script>

<template>
  <BaseLayout>
    <!-- Side Overlay Content -->
    <!-- Using the available v-slot, we can override the default Side Overlay content from layouts/partials/SideOvelay.vue -->
    <template #side-overlay-content>
<!--      <div class="content-side">-->
<!--        <p>Side Overlay content..</p>-->
<!--      </div>-->
      <BaseFilterSideOverlay></BaseFilterSideOverlay>
    </template>
    <!-- END Side Overlay Content -->

    <!-- Sidebar Content -->
    <!-- Using the available v-slot, we can override the default Sidebar content from layouts/partials/Sidebar.vue -->
    <template #sidebar-content>
      <div class="content-side">
        <BaseNavigation :nodes="navigation"
        />
      </div>
    </template>
    <!-- END Sidebar Content -->

    <!-- Header Content Left -->
    <!-- Using the available v-slot, we can override the default Header content from layouts/partials/Header.vue -->
    <template #header-content-left>
      <!-- Toggle Sidebar -->
      <button
        type="button"
        class="btn btn-sm btn-alt-secondary me-2 d-lg-none"
        @click="store.sidebar({ mode: 'toggle' })"
      >
        <i class="fa fa-fw fa-bars"></i>
      </button>
      <!-- END Toggle Sidebar -->

      <!-- Toggle Mini Sidebar -->
      <button
        type="button"
        class="btn btn-sm btn-alt-secondary me-2 d-none d-lg-inline-block"
        @click="store.sidebarMini({ mode: 'toggle' })"
      >
        <i class="fa fa-fw fa-ellipsis-v"></i>
      </button>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb breadcrumb-alt">
          <li class="breadcrumb-item">
            <a class="link-fx" href="javascript:void(0)">Báo cáo BĐS</a>
          </li>
          <li class="breadcrumb-item" aria-current="page">Aum</li>
        </ol>
      </nav>
      <!-- END Toggle Mini Sidebar -->
    </template>
    <!-- END Header Content Left -->

    <!-- Header Content Right -->
    <!-- Using the available v-slot, we can override the default Header content from layouts/partials/Header.vue -->
    <template #header-content-right>
      <!-- User Dropdown -->
      <div class="dropdown d-inline-block ms-2">
        <button
          type="button"
          class="btn btn-sm btn-alt-secondary d-flex align-items-center"
          id="page-header-user-dropdown"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img
            class="rounded-circle"
            src="/assets/media/avatars/avatar10.jpg"
            alt="Header Avatar"
            style="width: 21px"
          />
          <span class="d-none d-sm-inline-block ms-2">Châu</span>
          <i
            class="fa fa-fw fa-angle-down d-none d-sm-inline-block opacity-50 ms-1"
          ></i>
        </button>
        <div
          class="dropdown-menu dropdown-menu-md dropdown-menu-end p-0 border-0"
          aria-labelledby="page-header-user-dropdown"
        >
          <div
            class="p-3 text-center bg-body-light border-bottom rounded-top"
          >
            <img
              class="img-avatar img-avatar48 img-avatar-thumb"
              src="/assets/media/avatars/avatar10.jpg"
              alt="Header Avatar"
            />
            <p class="mt-2 mb-0 fw-medium">Châu Đỗ</p>
            <p class="mb-0 text-muted fs-sm fw-medium">Web Developer</p>
          </div>
          <div class="p-2">
            <a
              class="dropdown-item d-flex align-items-center justify-content-between"
              href="javascript:void(0)"
            >
              <span class="fs-sm fw-medium">Inbox</span>
              <span class="badge rounded-pill bg-primary ms-2">3</span>
            </a>
            <RouterLink
              :to="{ name: 'dashboard' }"
              class="dropdown-item d-flex align-items-center justify-content-between"
            >
              <span class="fs-sm fw-medium">Profile</span>
              <span class="badge rounded-pill bg-primary ms-2">1</span>
            </RouterLink>
            <a
              class="dropdown-item d-flex align-items-center justify-content-between"
              href="javascript:void(0)"
            >
              <span class="fs-sm fw-medium">Settings</span>
            </a>
          </div>
          <div role="separator" class="dropdown-divider m-0"></div>
          <div class="p-2">
            <RouterLink
              :to="{ name: 'dashboard' }"
              class="dropdown-item d-flex align-items-center justify-content-between"
            >
              <span class="fs-sm fw-medium">Lock Account</span>
            </RouterLink>
            <RouterLink
              :to="{ name: 'dashboard' }"
              class="dropdown-item d-flex align-items-center justify-content-between"
            >
              <span class="fs-sm fw-medium">Log Out</span>
            </RouterLink>
          </div>
        </div>
      </div>
      <!-- END User Dropdown -->

      <!-- Notifications Dropdown -->
      <div class="dropdown d-inline-block ms-2">
        <button
          type="button"
          class="btn btn-sm btn-alt-secondary"
          id="page-header-notifications-dropdown"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i class="fa fa-fw fa-bell"></i>
          <span v-if="notifications.length > 0" class="text-primary">•</span>
        </button>
        <div
          class="dropdown-menu dropdown-menu-lg p-0 border-0 fs-sm"
          aria-labelledby="page-header-notifications-dropdown"
        >
          <div
            class="p-2 bg-body-light border-bottom text-center rounded-top"
          >
            <h5 class="dropdown-header text-uppercase">Notifications</h5>
          </div>
          <ul class="nav-items mb-0">
            <li
              v-for="(notification, index) in notifications"
              :key="`notification-${index}`"
            >
              <a class="text-dark d-flex py-2" :href="`${notification.href}`">
                <div class="flex-shrink-0 me-2 ms-3">
                  <i :class="`${notification.icon}`"></i>
                </div>
                <div class="flex-grow-1 pe-2">
                  <div class="fw-semibold">{{ notification.title }}</div>
                  <span class="fw-medium text-muted">
                      {{ notification.time }}
                    </span>
                </div>
              </a>
            </li>
            <li v-if="!notifications.length" class="p-2">
              <div
                class="alert alert-light d-flex align-items-center space-x-2 mb-0"
                role="alert"
              >
                <i class="fa fa-exclamation-triangle opacity-50"></i>
                <p class="mb-0">No new ones!</p>
              </div>
            </li>
          </ul>
          <div
            v-if="notifications.length > 0"
            class="p-2 border-top text-center"
          >
            <a class="d-inline-block fw-medium" href="javascript:void(0)">
              <i class="fa fa-fw fa-arrow-down me-1 opacity-50"></i> Load
              More..
            </a>
          </div>
        </div>
      </div>
      <!-- END Notifications Dropdown -->

      <!-- Toggle Side Overlay -->
      <button
        type="button"
        class="btn btn-sm btn-alt-secondary ms-2"
        @click="store.sideOverlay({ mode: 'toggle' })"
      >
        <i class="fa fa-fw fa-list-ul fa-flip-horizontal"></i>
      </button>
      <!-- END Toggle Side Overlay -->
    </template>
    <!-- END Header Content Right -->

    <!-- Footer Content Left -->
    <!-- Using the available v-slot, we can override the default Footer content from layouts/partials/Footer.vue -->
    <template #footer-content-left>
      <strong>Tikop OP</strong>
      &copy; {{ store.app.copyright }}
    </template>
    <!-- END Footer Content Left -->
  </BaseLayout>
</template>
