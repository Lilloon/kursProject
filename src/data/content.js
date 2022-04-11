import me from "../static/images/me.jpg";
import father from "../static/images/father.jpg";
import mom from "../static/images/mom.jpg";
import sister from "../static/images/sister.jpg";
import denis from "../static/images/denis.jpg";
import artem from "../static/images/artem.jpg";
import dasha from "../static/images/dasha.jpg";
import alena from "../static/images/alena.jpg";
import lera from "../static/images/lera.jpg";
import snowball from "../static/images/snowball.jpg";
import jessy from "../static/images/jessy.jpg";

const content = {
  aboutMe: [
    {
      id: 1,
      title: "Это я",
      image: me,
      description: `Меня зовут Никита, мне 21 год и я уже на последнем курсе лучшего университета, ПензГТУ! Работаю фротенд-разработчиком в компании code-inside, работаю с библиотекой React, но и был опыт со Vue. Люблю проводить время с друзьями, слушать музыку и иногда грешу компьютерными играми`,
    },
  ],
  family: [
    {
      id: 1,
      title: "Папа",
      image: father,
      description:
        "Моему отцу 50 лет. Именно по его примеру я решил пойти в айти.",
    },
    {
      id: 2,
      title: "Мама",
      image: mom,
      description:
        "Моей маме 46 лет. Она работает медсестрой в детской поликлинике, поэтому в детстве я не болел долго.",
    },
    {
      id: 3,
      title: "Сестрёнка",
      image: sister,
      description: "Ей 13 лет, ходит в школу, любит смотреть тик-ток и аниме.",
    },
  ],
  friends: [
    {
      id: 1,
      title: "Денис",
      image: denis,
      description: `Он мой лучший друг, учится со мной в одной группе, и тоже хочет стать фронтенд-разработчиком. Хороший друг и всгда готов помочь.`,
    },
    {
      id: 2,
      title: "Артём",
      image: artem,
      description: `Учится в ПГУ. Занимается шитьём одежды и в юудущем хочет стать модельером.`,
    },
    {
      id: 3,
      title: "Даша",
      image: dasha,
      description: `Она учится в Москве. Всегда на позитиве и готова поднять всем настроение`,
    },
    {
      id: 4,
      title: "Алёна",
      image: alena,
      description: `Тоже учится в Москве на педагога. Любит детей и самый чуткий человек, которого я знаю.`,
    },
    {
      id: 5,
      title: "Лера",
      image: lera,
      description: `Иии она тоже учится в Москве. Она та, которая всегда готова поддержать и выслушать.`,
    },
  ],
  pets: [
    {
      id: 1,
      title: "Снежок",
      image: snowball,
      description: `Этот старичок со мной с 6 лет, ему уже 15 лет, любит помяукать, поласкаться и покушать.`,
    },
    {
      id: 2,
      title: "Джесси",
      image: jessy,
      description: `Та ещё истеричка, постаянно тявкает и не даёт к себе подойти.`,
    },
  ],
};

export default content;
