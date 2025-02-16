import { useEffect } from "react";

const VKComments = () => {
  useEffect(() => {
    // Дожидаемся загрузки API
    const loadVKScript = () => {
      if (!window.VK) {
        console.error("VK API не загружен!");
        return;
      }

      console.log("✅ VK API загружен, инициализация...");

      // Инициализируем VK API
      window.VK.init({
        apiId: 53052429, // ID твоего приложения VK
        onlyWidgets: true,
      });

      // Рендерим виджет комментариев
      window.VK.Widgets.Comments("vk_comments", {
        limit: 10, // Количество комментариев
        attach: "*", // Разрешить прикреплять файлы (изображения, видео и т. д.)
        autoPublish: 1, // Автопубликация
      });
    };

    // Проверяем, загружен ли API
    if (window.VK) {
      loadVKScript();
    } else {
      // Ждем загрузки API
      const script = document.createElement("script");
      script.src = "https://vk.com/js/api/openapi.js?169";
      script.async = true;
      script.onload = loadVKScript;
      document.body.appendChild(script);
    }
  }, []);

  return <div id="vk_comments"></div>;
};

export default VKComments;
