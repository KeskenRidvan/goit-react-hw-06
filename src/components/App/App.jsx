import ContactList from '../ContactList/ContactList';
import ContactsForm from '../ContactsForm/ContactsForm';
import SearchBox from '../SearchBox/SearchBox';
import css from './App.module.css';

function App() {
  return (
    <main className={css.page}>
      <section className={css.container}>
        <header className={css.header}>
          <p className={css.kicker}>Redux Toolkit Contact Manager</p>
          <h1 className={css.title}>Iletisim Kitabi</h1>
          <p className={css.subtitle}>
            Kisileri hizlica ekleyin, filtreleyin ve tek tikla yonetin.
          </p>
        </header>

        <div className={css.grid}>
          <div className={css.panel}>
            <ContactsForm />
          </div>
          <div className={css.panel}>
            <SearchBox />
            <ContactList />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
