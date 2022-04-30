import React from 'react';
import cl from './Home.module.scss';

const Home = () => {
    return (
        <div className={cl.home}>
            <div className={cl.first}>
                <div>
                    <h1>«OrientTS» к <br /> вашим <br /> услугам</h1>
                    <button>Связаться</button>
                </div>
            </div>
            <div className={cl.second}>
                <h2>Все о компании «OrientTS»</h2>
                <h3>Наша история</h3>
                <p>С первых дней работы мы стремимся обеспечивать максимальный уровень сервиса, уделяя особое внимание эффективности процессов, а также четкому и содержательному взаимодействию с клиентами.Миссия компании «OrientTS» проста — предоставлять качественные услуги в срок. Чтобы преуспеть в ее реализации, наша команда учитывает особенности каждого проекта. Надеемся, у нас вы найдете то, что ищете. Если у вас есть какие-либо вопросы, обращайтесь к нам.https://www.wix.com/website-template/view/html/2105?siteId=d2bc18f2-4569-4541-bb47-a9792481144d&metaSiteId=2b344045-91c9-4a2e-bfe3-0fe03ec5ef68&originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Flanding-pages&tpClick=view_button</p>
            </div>
            <div className={cl.third} >
                <div className={cl.third_top}>
                    <h1>Все услуги</h1>
                    <h4>Удовлетворим ваши потребности</h4>
                </div>
                <div className={cl.third_bottom}>
                    <div className={cl.third_bottom_left}>
                        <h2>Доставка на дом</h2>
                        <p>С момента своего основания компания «OrientTS» заработала репутацию одной из самых надежных в отрасли. Доверьте нам решение своей задачи и убедитесь, что мы учитываем интересы каждого клиента и обеспечиваем высокое качество требуемого результата.</p>
                    </div>
                    <div className={cl.third_bottom_right}>
                        <div className={cl.firstp}></div>
                    </div>
                </div>
                <div className={cl.third_bottom}>
                    <div className={cl.third_bottom_left}>
                        <h2>Экспресс-доставка</h2>
                        <p>У нас есть все необходимые навыки и опыт для решения практически любой задачи, с которой к нам обращаются. Клиенты точно знают, что специалисты компании «OrientTS» всегда работают профессионально, эффективно и с отличным результатом.</p>
                    </div>
                    <div className={cl.third_bottom_right}>
                        <div className={cl.secondp}></div>
                    </div>
                </div>
                <div className={cl.third_bottom}>
                    <div className={cl.third_bottom_left}>
                        <h2>Отслеживание отправлений</h2>
                        <p>Специалисты компании «OrientTS» знают толк в своем деле, особенно когда речь идет об этой услуге. Вы можете рассчитывать на наши профессионализм, эффективный подход к работе и умение выполнять задачи в срок. Надеемся, сотрудничество с нами вам понравится.
                        </p>
                    </div>
                    <div className={cl.third_bottom_right}>
                        <div className={cl.thirdp}></div>
                    </div>
                </div>
            </div>


            <div className={cl.fourth}>
                <div className={cl.fourth_inner}>
                    <div className={cl.fourth_inner_item}>
                        <img src="https://static.wixstatic.com/media/671a947170434be6b240c8958d584bdb.jpg/v1/fill/w_220,h_220,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Woman%20in%20Yellow.jpg" alt="" />
                        <div className={cl.text}>
                            <p>Это отзыв. Пусть клиенты расскажут о том, как приятно с вами работать.</p>
                            <span>Имя Фамилия</span>
                        </div>
                    </div>
                    <div className={cl.fourth_inner_item}>
                        <img src="https://static.wixstatic.com/media/ee158ebbe90b4f47b127b7fbb28b4fd5.jpg/v1/fill/w_220,h_220,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Smiling%20Young%20Man.jpg" alt="" />
                        <div className={cl.text}>
                            <p>Это отзыв. Пусть клиенты расскажут о том, как приятно с вами работать.</p>
                            <span>Имя Фамилия</span>
                        </div>
                    </div>
                    <div className={cl.fourth_inner_item}>
                        <img src="https://static.wixstatic.com/media/443d457e6c9c4ea28acc4436f4f0390d.jpg/v1/fill/w_220,h_220,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Senior%20Man.jpg" alt="" />
                        <div className={cl.text}>
                            <p>Это отзыв. Пусть клиенты расскажут о том, как приятно с вами работать.</p>
                            <span>Имя Фамилия</span>
                        </div>
                    </div>
                </div>
            </div>


            <div className={cl.fifth}>
                <div className={cl.fifth_inner}>
                    <img src="https://static.wixstatic.com/media/94e202ff9efa4e8889fef9311cb6e0e7.jpg/v1/fill/w_490,h_775,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/94e202ff9efa4e8889fef9311cb6e0e7.jpg" alt="" />
                    <div className={cl.fifth_inner_right}>
                        <h1>Свяжитесь с нами</h1>
                        <label htmlFor="">Имя*</label>
                        <input type="text" placeholder='Введите свое имя' />
                        <label htmlFor="">Эл.почта*</label>
                        <input type="text" placeholder='Добавьте эл.почту' />
                        <label htmlFor="">Тема</label>
                        <input type="text" placeholder='Укажите тему' />
                        <label htmlFor="">Сообщение</label>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Добавьте сообщение...'></textarea>
                        <button>Отправить</button>
                    </div>
                </div>
            </div>

            <div className={cl.sixth}>
                <div className={cl.sixth_top}>
                    <div>
                        <img src="https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Facebook.png" alt="" />
                        <img src="https://static.wixstatic.com/media/01ab6619093f45388d66736ec22e5885.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Twitter.png" alt="" />
                        <img src="https://static.wixstatic.com/media/7528824071724d12a3e6c31eee0b40d4.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LinkedIn.png" alt="" /></div>
                </div>
                <div className={cl.sixth_bottom}>
                    <span> ©2022 OrientTS. Сайт создан на Wix.com</span>
                </div>
            </div>

        </div>
    );
};

export default Home;