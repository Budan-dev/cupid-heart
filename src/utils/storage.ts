export const get_data = <T = unknown>(key: string): T | null => {
  if (typeof window === "undefined") return null;

  try {
    const value = localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : null;
  } catch (error) {
    console.error("Error reading storage:", error);
    return null;
  }
};

export const save_data = <T>(data: T, key: string): void => {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error("Error saving to storage:", error);
  }
};

export const clear_store = (): void => {
  if (typeof window === "undefined") return;
  localStorage.clear();
};
