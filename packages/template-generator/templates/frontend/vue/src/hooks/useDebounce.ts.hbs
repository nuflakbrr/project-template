import { ref, type Ref } from 'vue';

export const useDebounce = <T>(initialValue: T, delay = 300): [Ref<T>, (value: T) => void] => {
  const debouncedValue = ref(initialValue) as Ref<T>;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  const setDebouncedHandler = (newValue: T) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      debouncedValue.value = newValue;
    }, delay);
  };

  return [debouncedValue, setDebouncedHandler];
};

export default useDebounce;
