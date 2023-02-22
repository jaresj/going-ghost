import { Footer, Navbar } from '../components';

const Graveyard = () => (
  <div className="min-h-screen bg-cover bg-no-repeat bg-fixed bg-center bg-primary-black">
    <Navbar />
    <div className="relative">
      <h1 className="flex justify-center text-white">This Week in the Graveyard</h1>
      <div className="flex justify-center">
        <iframe className="w-[90%] flex justify-center" title="calendar" src="https://calendar.google.com/calendar/embed?&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&showTitle=0&showNav=0&showTz=0&showCalendars=0&showTabs=0&mode=WEEK&showPrint=0&src=Z29pbmcuZ2hvc3Qub3JnYW5pemF0aW9uQGdtYWlsLmNvbQ&color=%23039BE5" />
      </div>
    </div>
    <div className="relative" />
    <Footer />
  </div>
);

export default Graveyard;
