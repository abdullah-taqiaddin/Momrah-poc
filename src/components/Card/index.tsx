import { Button } from "@chakra-ui/react";
import styles from "./style.module.css";


interface ICardProps {
  titleImage?: string;
  title?: string;
  desciption?: string;
  programSiteURL?: string;
  backgroundImageURL?: string;
}

const Card = ({
  titleImage,
  title,
  desciption,
  programSiteURL,
  backgroundImageURL,
}: ICardProps) => {
  console.log(titleImage);
  return (
    <div
      className={`${styles.Card} ${
        backgroundImageURL ? styles.CardBackground : ""
      }`}
      style={{
        backgroundImage: backgroundImageURL
          ? `url(${backgroundImageURL})`
          : undefined,
      }}
    >
      <div
        className={
          backgroundImageURL
            ? styles.CardTitleImageContainer
            : styles.CardTitleImageContainerNoBg
        }
      >
        <img
          src={titleImage}
          className={styles.CardTitleImage}
          alt="titleImage"
        />
      </div>
      <div className={styles.CardTitle}>{title}</div>
      <div className={styles.CardDescription}>{desciption}</div>
      <Button
        className={styles.CardButton}
        variant={backgroundImageURL ? "ghost" : "secondary"}
        as={"a"}
        href={programSiteURL}
      >
        Go to Program site
      </Button>
    </div>
  );
};

export default Card;
