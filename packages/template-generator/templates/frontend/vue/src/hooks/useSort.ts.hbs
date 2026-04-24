import { ref, type Ref } from 'vue';
import { type SortDirection } from '@/interfaces/hooks/useSort';

export type SortHookReturn = {
  sortBy: Ref<string>;
  direction: Ref<SortDirection>;
  handleSort: (field: string) => void;
};

export function useSort(): SortHookReturn {
  const direction = ref<SortDirection>({ field: '', direction: '' });
  const sortBy = ref<string>('');

  const handleSort = (field: string): void => {
    if (!field) return;

    let newDirection = '';

    if (direction.value.field !== field || direction.value.direction === '') {
      newDirection = 'asc';
    } else if (direction.value.direction === 'asc') {
      newDirection = 'desc';
    } else if (direction.value.direction === 'desc') {
      newDirection = '';
    }

    direction.value = { field, direction: newDirection };
    const sortParam = newDirection === 'asc' ? field : `-${field}`;

    if (newDirection === '') {
      deleteSort();
    } else {
      handleChangeSort(sortParam);
    }
  };

  const deleteSort = (): void => {
    sortBy.value = '';
  };

  const handleChangeSort = (field: string): void => {
    sortBy.value = field;
  };

  return {
    sortBy,
    direction,
    handleSort,
  };
}

export default useSort;
