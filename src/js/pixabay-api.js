// Базовий URL для запитів до API Pixabay
const API_URL = 'https://pixabay.com/api/?';
// Ключ доступу до API Pixabay
const API_KEY = '46058813-b862a78a10faee37b590bab91';

// Функція для отримання даних з API Pixabay
export function getGalleryData(queryValue) {
  // Створюємо параметри запиту
  const searchParams = new URLSearchParams({
    key: API_KEY,           // API ключ
    q: queryValue,          // Пошуковий запит
    image_type: 'photo',    // Тип зображення (фото)
    orientation: 'horizontal', // Горизонтальна орієнтація зображення
    safesearch: true,       // Включений безпечний пошук
  });

  // Виконуємо запит до API і повертаємо результат
  return fetch(`${API_URL}${searchParams}`)
    .then(response => {
      // Перевіряємо, чи запит успішний (код 200)
      if (!response.ok) {
        // Якщо запит не успішний, кидаємо помилку
        throw new Error(response.status);
      }
      // Повертаємо дані у форматі JSON
      return response.json();
    });
}
