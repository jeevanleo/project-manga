import React from "react";
import "./cards.css";

function Cards({ item }) {
  const handleClick = () => {
    let link = "";
    switch (item.id) {
      case 1:
        link = "https://mangareader.to/read/jujutsu-kaisen-168/en/chapter-254";
        break;
      case 2:
        link = "https://mangareader.to/read/one-piece-3/en/chapter-1";
        break;
      case 3:
        link = "https://mangareader.to/read/blue-lock-225/en/chapter-1";
        break;
      case 4:
        link = "https://mangareader.to/read/bleach-1623/en/chapter-1";
        break;
      case 5:
        link =
          "https://mangareader.to/read/zom-100-bucket-list-of-the-dead-2235/en/chapter-1";
        break;
      case 6:
        link =
          "https://mangareader.to/read/hells-paradise-jigokuraku-662/en/chapter-1";
        break;
      case 7:
        link = "https://mangareader.to/read/bleach-1623/en/chapter-1";
        break;
      case 8:
        link =
          "https://mangareader.to/read/boruto-naruto-next-generation-8419/en/chapter-1";
        break;
      case 9:
        link = "https://mangareader.to/read/black-clover-1469/en/chapter-1";
        break;
      case 10:
        link =
          "https://mangareader.to/read/demon-slayer-kimetsu-no-yaiba-296/en/chapter-1";
        break;
      case 11:
        link = "https://mangareader.to/read/wind-breaker-37004/en/chapter-1";
        break;
      case 12:
        link =
          "https://mangareader.to/read/my-hero-academia-colored-edition-65103/en/chapter-1";
        break;
      case 13:
        link = "https://mangareader.to/read/rentagirlfriend-2291/en/chapter-1";
        break;
      case 14:
        link =
          "https://mangareader.to/read/sweet-reincarnation-34803/en/chapter-1";
        break;
      case 15:
        link =
          "https://mangareader.to/read/doraemon-colored-edition-56146/en/chapter-1";
        break;
      case 16:
        link =
          "https://mangareader.to/read/masamunekuns-revenge-3967/en/chapter-1";
        break;
      case 17:
        link =
          "https://mangareader.to/read/fly-me-to-the-moon-295/en/chapter-1";
        break;
      case 18:
        link = "https://mangareader.to/read/rurouni-kenshin-77/en/chapter-1";
        break;
      case 19:
        link = "https://mangareader.to/read/spy-x-family-86/en/chapter-1";
        break;
      case 20:
        link = "https://mangareader.to/read/bungo-stray-dogs-156/en/chapter-1";
        break;
      case 21:
        link = "https://mangareader.to/read/horimiya-121/en/chapter-1";
        break;
      case 22:
        link =
          "https://mangareader.to/read/the-ancient-magus-bride-173/en/chapter-1";
        break;
      case 23:
        link =
          "https://mangareader.to/read/in-the-antens-belle-36276/en/chapter-1";
        break;
      case 24:
        link = "https://mangareader.to/read/edens-zero-7764/en/chapter-1";
        break;
      case 25:
        link =
          "https://mangareader.to/read/chainsaw-man-colored-edition-56074/en/chapter-1";
        break;
      case 26:
        link =
          "https://mangareader.to/read/the-devil-is-a-parttimer-836/en/chapter-1";
        break;
      case 27:
        link =
          "https://mangareader.to/read/the-great-cleric-33494/en/chapter-1";
        break;
      case 28:
        link = "https://mangareader.to/read/dark-gathering-34636/en/chapter-1";
        break;
      case 29:
        link = "https://mangareader.to/taekwondo-kid-59090";
        break;
      case 30:
        link = "https://mangareader.to/days-with-a-girl-853";
        break;
      default:
        // Default link if no specific link is defined for other items
        link = "https://mangareader.to/home";
    }
    window.open(link, "_blank");
  };

  return (
    <div className="mt-4 my-3 p-18">
      <div
        className="card w-80 h-78 bg-base-100 shadow-xl hover:scale-105 duration-200"
        onClick={handleClick}
      >
        <figure className="card-image-container">
          <img src={item.image} alt="Shoes" className="card-image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">
              <span>&#8377;</span>
              {item.price}
            </div>
            <div className="badge badge-outline hover:text-blue-500 px-2 py-1">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
