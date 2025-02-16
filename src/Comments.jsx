import { useEffect } from "react";

const VKComments = () => {
  useEffect(() => {
    // Проверяем, есть ли VK в window (чтобы избежать ошибок)
    if (!window.VK) return;

    // Инициализируем VK API
    window.VK.init({
      apiId: 53052429, // Замени на свой ID приложения VK
      onlyWidgets: true,
    });

    // Рендерим комментарии
    window.VK.Widgets.Comments("vk_comments", {
      limit: 10, // Количество комментариев
      attach: "*", // Разрешить прикреплять файлы (изображения, видео и т. д.)
      autoPublish: 1, // Автопубликация
    });
  }, []);

  return <div id="vk_comments"></div>;
};

export default VKComments;
