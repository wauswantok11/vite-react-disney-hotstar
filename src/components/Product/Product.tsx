import styles from "./style.module.scss";
function Product() {
  const ProductList = [
    {
      id: 1,
      image: "/images/disney.png",
      video: "/vdo/disney.mp4",
      name: "disney",
    },
    {
      id: 2,
      image: "/images/pixar.png",
      video: "/vdo/pixar.mp4",
      name: "pixar",
    },
    {
      id: 3,
      image: "/images/marvel.png",
      video: "/vdo/MARVEL.mp4",
      name: "marvel",
    },
    {
      id: 4,
      image: "/images/starwar.png",
      video: "/vdo/StarWars.mp4",
      name: "StarWars",
    },
    {
      id: 5,
      image: "/images/National-Logo.png",
      video: "/vdo/national-geographic.mp4",
      name: "national-geographic",
    },
  ];
  return (
    <>
      <div className={styles.ProductList}>
        {ProductList.map((item) => (
          <div className={styles.ProductItem} key={item.id}>
            <img src={item.image} alt={item.name} className={styles.ProductImage} />
            <video src={item.video} className={styles.ProductVideo} loop autoPlay playsInline  muted />
          </div>
        ))}
      </div>
    </>
  );
}

export default Product;
