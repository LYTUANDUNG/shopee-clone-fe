<script lang="ts" setup>
import { RouterLink } from "vue-router";
import {
  Breadcrumb as BreadcrumbRoot,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export interface BreadcrumbItemData {
  label: string;
  to?: string;
}

interface Props {
  items: BreadcrumbItemData[];
}

const props = defineProps<Props>();

const isLastItem = (index: number) => {
  return index === props.items.length - 1;
};
</script>

<template>
  <BreadcrumbRoot>
    <BreadcrumbList class="text-sm">
      <template v-for="(item, index) in items" :key="index">
        <BreadcrumbItem>
          <BreadcrumbPage v-if="isLastItem(index)" class="text-gray-800">
            {{ item.label }}
          </BreadcrumbPage>

          <BreadcrumbLink
            v-else
            as-child
            class="text-blue-600 hover:text-blue-800 hover:underline"
          >
            <RouterLink :to="item.to || '/'">
              {{ item.label }}
            </RouterLink>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator v-if="!isLastItem(index)" class="text-gray-500">
          &gt;
        </BreadcrumbSeparator>
      </template>
    </BreadcrumbList>
  </BreadcrumbRoot>
</template>
