import '../style/footer.scss';

function Footer() {
  return (
    <div className='footer'>
      <img src='../marvel-logo.png' alt='Marvel-logo' />
      <div className='footer-nav'>
        <div>
          <a href='https://marvelofficial.com/shop/?srsltid=AfmBOorVehT8ELdv9CSRuSbn2YBFn_1tngBPVsIlMT4j70lF8KhpRGsb'>
            Shops
          </a>
          <a href='https://www.disneyplus.com/brand/marvel?cid=DTCI-Synergy-Marvel-Site-Acquisition-Library-US-Marvel-NA-EN-NavFooter-Marvel_DisneyPlus_NavFooter_Evergreen-NA'>
            Disney+
          </a>
        </div>

        <div>
          <a href='https://marvelstory.fr/'>Blog</a>
          <a href='https://www.marvelhq.com/'>Marvel.com</a>
        </div>
        <div>
          <a href='https://www.marvel.com/corporate/advertising'>Advertising</a>
          <a href='https://help.marvel.com/'>Help/Faq</a>
        </div>
      </div>
      <div className='footer-socials'>
        <div>
          <a href='https://www.tiktok.com/@marvel'>
            <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'>
              <style></style>
              <path
                fill='white'
                d='M14.5 3.7c-.9-.6-1.6-1.6-1.9-2.7V.2H9.5v12c0 1.4-1.1 2.4-2.5 2.4-.5 0-.8-.2-1.1-.3-.8-.3-1.4-1.1-1.4-2.1 0-1.4 1.3-2.5 2.5-2.5.3 0 .5 0 .8.2V6.7H7c-3 0-5.5 2.5-5.5 5.5 0 1.9.9 3.5 2.4 4.6.9.6 2.1.9 3.2.9 3 0 5.5-2.5 5.5-5.5V6.1c1.1.8 2.7 1.4 4.1 1.4v-3c-.8 0-1.5-.3-2.2-.8z'
              ></path>
            </svg>
          </a>
          <a href='http://youtube.com/marvel'>
            <svg xmlns='http://www.w3.org/2000/svg' width='21' height='15' viewBox='0 0 21 15'>
              <path
                fill='white'
                d='M8.109 9.73l-.001-5.679 5.522 2.85-5.521 2.83zm12.124-6.663s-.2-1.393-.812-2.006c-.778-.806-1.649-.81-2.048-.856C14.513 0 10.223 0 10.223 0h-.009s-4.29 0-7.15.205c-.4.046-1.27.05-2.048.856-.612.613-.812 2.006-.812 2.006S0 4.703 0 6.338v1.534c0 1.636.204 3.272.204 3.272s.2 1.392.812 2.006c.778.805 1.8.78 2.254.864 1.635.155 6.949.203 6.949.203s4.294-.006 7.154-.21c.4-.048 1.27-.052 2.048-.857.612-.614.812-2.006.812-2.006s.204-1.636.204-3.272V6.338c0-1.635-.204-3.271-.204-3.271z'
              ></path>
            </svg>
          </a>
          <a href='http://twitter.com/marvel'>
            <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'>
              <path
                fill='white'
                d='M3.5 5.1l3.8 5L4 13.6c-1.9 1.8-3.1 3.6-2.8 3.9.3.3 1.7-.8 3.1-2.5 3.2-3.8 4.1-3.8 6.4 0 1.3 2.2 2.5 3 4.5 3H18l-3.6-5-3.7-5.1L13.9 4c1.8-2.2 2.8-4 2.3-4-.4 0-1.8 1.3-3 3-1.3 1.6-2.6 3-3 3-.4 0-1.6-1.4-2.7-3C6.1.9 4.7 0 2.7 0H-.2l3.7 5.1zm6.3 3.3c5.3 7.6 5.8 8.6 4.4 8.6C13.4 17 3 2.7 3 1.6c0-2 2.3.3 6.8 6.8z'
              ></path>
            </svg>
          </a>
          <a href='http://facebook.com/marvel'>
            <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'>
              <path
                fill='white'
                d='M9.426 17.647H.974A.974.974 0 010 16.673V.974C0 .436.436 0 .974 0h15.7c.537 0 .973.436.973.974v15.699a.974.974 0 01-.974.974h-4.497v-6.834h2.294l.343-2.663h-2.637v-1.7c0-.772.214-1.297 1.32-1.297h1.41V2.77a18.853 18.853 0 00-2.055-.105c-2.033 0-3.425 1.241-3.425 3.52V8.15h-2.3v2.663h2.3v6.834z'
              ></path>
            </svg>
          </a>
          <a href='http://instagram.com/marvel'>
            <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'>
              <path
                fill='white'
                d='M15.441 15.993H2.206a.552.552 0 01-.552-.552V7.17H3.86c-.287.414-.384 1.185-.384 1.675 0 2.953 2.408 5.356 5.368 5.356 2.96 0 5.368-2.403 5.368-5.356 0-.49-.069-1.25-.425-1.675h2.206v8.272a.552.552 0 01-.552.552M8.844 5.458a3.39 3.39 0 013.394 3.386 3.39 3.39 0 01-3.394 3.386A3.39 3.39 0 015.45 8.844a3.39 3.39 0 013.393-3.386m4.391-3.252h1.655c.304 0 .551.247.551.551v1.655a.552.552 0 01-.551.551h-1.655a.552.552 0 01-.551-.551V2.757c0-.304.247-.551.551-.551M15.55 0H2.098A2.095 2.095 0 000 2.093v13.461c0 1.156.94 2.093 2.098 2.093h13.451a2.095 2.095 0 002.098-2.093V2.093C17.647.937 16.707 0 15.549 0'
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
