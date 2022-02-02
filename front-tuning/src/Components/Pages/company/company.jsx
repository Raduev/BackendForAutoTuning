import React from 'react';
import './company.css'
const Company = () => {
  return (
    <div className='company-content'>
      <div className="container">
        <h1>О компании</h1>
        <div className="company-main">
          <div className="company-item">
           <div className="company-img">
             <img src={'https://www.hard-tuning.ru/local/templates/hardtuned_new/img/about-1.jpg'} alt=""/>
           </div>
            <div className="company-img">
              <img src={'https://www.hard-tuning.ru/local/templates/hardtuned_new/img/about-2.jpg'} alt=""/>
            </div><div className="company-img">
            <img src={'https://www.hard-tuning.ru/upload/medialibrary/bdf/bdf04b4832c4ad0f2672a9f42ac11832.jpg'} alt=""/>
          </div>
          </div>
          <div className="company-item">
            <div className='company-title'>Мы рады приветствовать вас на сайте нашей компании</div>
            <div className='company-desc'>
              <p>Наша компания была основана в 2011 году,
                а наш интернет-магазин стал одним из первых магазинов,
                осуществляющих on-line продажу тюнинга в регионе.
                Компания специализируется на оптовой и розничной продаже тюнинга и аксессуары в Москве и по всей РФ и СНГ.
                На данный момент мы представляем собой крупную компанию,
                владеющую интернет-магазином и имеющую в своей сети единым call-центр,
                которым регулирует всю деятельность магазина, отдел продаж,
                службу доставки, широкий штат квалифицированных сборщиков,
                собственный склад с постоянным наличием необходимого запаса товаров.
                За это вермя у нас сложились партнеров отношения с ведущими производителями,
                позволяющие предлагать высококачественную продукцию по конкурентноспособным ценам.
                Мы можем гордиться тем, что у нас один из самых широких ассортиментов тюнинга России.</p>
            </div>
            <iframe
              width="600" height="480" src="https://www.youtube.com/embed/FdkHciMv2Ms"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
          </div>
        </div>
        <div className='company-text'>
          <h2>Наше производство</h2>
          <p>
            У нас большое собственное производство обвесов и изделий из стеклопластика и абс пластика.
            Делаем детали как обвесы на легковые авто так и обтекатели на грузовые авто и другие детали.
            Мы постоянно совершенствуем производство и качество наших деталей.
            Мы гордимся нашим производством!
          </p>
        </div>
        <div className="company-carts">
          <div className="company-carts-item">
            <img src={'https://www.hard-tuning.ru/local/templates/hardtuned_new/img/gallery-about.jpg'} alt=""/>
          </div>
          <div className="company-carts-item">
            <img src={'https://www.hard-tuning.ru/local/templates/hardtuned_new/img/gallery-about1.jpg'} alt=""/>
          </div>
          <div className="company-carts-item">
            <img src={'https://www.hard-tuning.ru/local/templates/hardtuned_new/img/gallery-about2.jpg'} alt=""/>
          </div>
          <div className="company-carts-item">
            <img src={'https://www.hard-tuning.ru/local/templates/hardtuned_new/img/gallery-about3.jpg'} alt=""/>
          </div>
        </div>
          <div className='company-opportunities'>
            <h2>Наши возможности</h2>
            <div className="company-opportunities-wrapp">
            <div className='opportunities-item'>
             <ul>
                <li>
                  <img src='https://www.hard-tuning.ru/local/templates/hardtuned_new/img/delivery-truck-about.png'
                       alt="#" className='opportunities-icon-1'/>
                  Быстрая доставка
                </li>
                <li>
                  <img src="https://www.hard-tuning.ru/local/templates/hardtuned_new/img/piggy-bank-about.png"
                       alt="#" className='opportunities-icon-2'/>
                  Низкие цены</li>
               <li>
                 <img src="https://www.hard-tuning.ru/local/templates/hardtuned_new/img/list-about.png"
                      alt="" className='opportunities-icon-3'/> Широкий ассортимент
               </li>
               <li>
                 <img src="https://www.hard-tuning.ru/local/templates/hardtuned_new/img/delivery-about.png"
                      alt="" className='opportunities-icon-4'/>Надежные поставщики
               </li>
             </ul>
            </div>
            <div className='opportunities-item'>
              <ul>
                <li>
                  <img src='https://www.hard-tuning.ru/local/templates/hardtuned_new/img/star-about.png'
                       alt="#" className='opportunities-icon-5'/>
                   Отличное обслуживание
                </li>
                <li>
                  <img src="https://www.hard-tuning.ru/local/templates/hardtuned_new/img/headset-about.png"
                       alt="#" className='opportunities-icon-6'/>Профессиональные менеджеры</li>
                <li>
                  <img src="https://www.hard-tuning.ru/local/templates/hardtuned_new/img/shield-about.png"
                       alt="" className='opportunities-icon-7'/>Гарантия на все товары
                </li>

              </ul>
            </div>
            <div className='opportunities-item'>
              <ul>
                <li>
                  <img src='https://www.hard-tuning.ru/local/templates/hardtuned_new/img/box-about.png'
                       alt="#" className='opportunities-icon-8'/>
                  Сезонные скидки
                </li>
                <li>
                  <img src="https://www.hard-tuning.ru/local/templates/hardtuned_new/img/credit-card-about.png"
                       alt="#" className='opportunities-icon-9'/>
                  Программа лояльности
                </li>
                <li>
                  <img src="https://www.hard-tuning.ru/local/templates/hardtuned_new/img/packaging-about.png"
                       alt="" className='opportunities-icon-10'/>
                  Бонусы и подарки
                </li>

              </ul>
            </div>
            </div>
          </div>
    </div>
    </div>
  );
};

export default Company;
