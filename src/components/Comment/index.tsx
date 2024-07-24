import styles from "./style.module.css";
import verifiedIcon from "../../assets/icons/verified-icn.svg";

interface ICommentProps {
  avatar: string;
  name: string;
  date: string;
  commentText: string;
  isReply?: boolean;
}

const Comment = ({
  avatar,
  name,
  date,
  commentText,
  isReply = false,
}: ICommentProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "17px" }}>
      {isReply && (
        <div
          style={{
            width: "1px",
            height: "72px",
            background: "#D0D0D0",
            marginLeft: "1rem",
          }}
        ></div>
      )}
      <div className={styles.commentBody}>
        <div className={styles.commentHeader}>
          <div className={styles.avatarContainer}>
            <img src={avatar} alt="avatar" />
          </div>
          <div className={styles.commentDetails}>
            <div className={styles.name}>
              {name}{" "}
              {isReply && (
                <>
                  <img src={verifiedIcon} alt="verifiedIcon"></img>{" "}
                  <div style={{ fontWeight: "400" }}>Verified user</div>
                </>
              )}
            </div>
            <div className={styles.commentDate}>{date}</div>
          </div>
        </div>
        <div className={styles.commentText}>{commentText}</div>
      </div>
    </div>
  );
};

export default Comment;
