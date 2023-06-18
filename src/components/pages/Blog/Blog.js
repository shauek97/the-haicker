import styles from "./Blog.module.scss";
import Header from "../../sections/Header/Header";

export default function Blog({dataPushHandler, formData, handleChange}) {


  return (
    <>
      <Header />
      <section className={styles.blog}>
        <div className={styles.titleBox}>
          <form onSubmit={dataPushHandler}>
            <input type="text" name="name" placeholder="name" value={formData.name} onChange={handleChange}></input>
            <input type="text" name="surname" placeholder="surname" value={formData.surname} onChange={handleChange}></input>
            <button type="submit">Send</button>
          </form>
        </div>
      </section>
    </>
  );
}
