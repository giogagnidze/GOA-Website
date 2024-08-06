import goa from './assets/goa.png'

function Main() {
    return (
        <>
            <section className="container">
                <h2 id="cost" className="header">ფასები</h2>
                <div className="pricing">
                    <div className="card">
                        <div className="content">
                            <h4>კვირაში ერთხელ</h4>
                            <h3>კურსის ღირებულება შეაგდენს 170 ლარს თვეში 310 ლარის ნაცვლად.</h3>
                            <p><i className="ri-checkbox-circle-line"></i>თქვენც ისწავლით იგივეს, მაგრამ უფრო დიდხანს მოგიწევთ სწავლა</p>
                            <p><i className="ri-checkbox-circle-line"></i>სწავლა სახლში</p>
                        </div>
                        <button className="btn"><a href="https://www.facebook.com/nika11keshelava">შემოგვიერთდი ეხლავე</a></button>
                    </div>
                    <div className="card">
                        <div className="content">
                            <h4>კვირაში ორჯერ</h4>
                            <h3>კურსის ღირებულება შეადგენს 290 ლარს თვეში 560 ლარის ნაცვლად.</h3>
                            <p><i className="ri-checkbox-circle-line"></i>უფრო ძლიერი კოდები</p>
                            <p><i className="ri-checkbox-circle-line"></i>თქვენ არ მოგიწევთ დიდი ხნის სწავლა, როგორც Speed 1 ზე</p>
                            <p><i className="ri-checkbox-circle-line"></i>სწავლა სახლში</p>
                        </div>
                        <button className="btn"><a href="https://www.facebook.com/nika11keshelava">შემოგვიერთდი ეხლავე</a></button>
                    </div>
                    <div className="card">
                        <div className="content">
                            <h4>კვირაში სამჯერ</h4>
                            <h3>კურსის ღირებულება შეადგენს 390 ლარს თვეში 780 ლარის ნაცვლად.</h3>
                            <p><i className="ri-checkbox-circle-line"></i>წარმატებას ძალიან სწრაფად მიაღწევ</p>
                            <p><i className="ri-checkbox-circle-line"></i>უფრო ძლიერი კოდები</p>
                            <p><i className="ri-checkbox-circle-line"></i>უფრო მალე დასაქმდებით GOA-ში</p>
                            <p><i className="ri-checkbox-circle-line"></i>რაკეტასავით გაფრინდებით და ძალიან სწრაფად ისწავლით პროგრამირებას</p>
                            <p><i className="ri-checkbox-circle-line"></i>სწავლა სახლში</p>
                        </div>
                        <button className="btn"><a href="https://www.facebook.com/nika11keshelava">შემოგვიერთდი ეხლავე</a></button>
                    </div>
                </div>
            </section>

            <footer id="abt" className="container">
                <span className="blur"></span>
                <span className="blur"></span>
                <div className="column">
                    <div className="logo">
                        <img src={goa}/>
                    </div>
                    <p>ერთადერთი და ყველაზე სანდო აკადემია საქართველოში, რომელიც გეხმარებათ პირადად, ადამიანურად და გეხმარებათ ცხოვრებისეული პრობლემების ბოლომდე გადაჭრაში.💚</p>
                    <div className="socials">
                        <a href="https://www.youtube.com/@Goal_Oriented_Academy__GOA"><i className="ri-youtube-line"></i></a>
                        <a href="https://www.instagram.com/goal_oriented_academy__goa/"><i className="ri-instagram-line"></i></a>
                        <a href="https://www.tiktok.com/@goal_oriented_academy"><i className="ri-tiktok-line"></i></a>
                    </div>
                </div>
                <div className="column">
                    <h4>კომპანია</h4>
                    <a href="#">ბიზნესი</a>
                    <a href="#">პარტნიორები</a>
                    <a href="#">ქსელი</a>
                </div>
                <div className="column">
                    <h4>ჩვენს შესახებ</h4>
                    <a href="#">ბლოგები</a>
                    <a href="#">არხები</a>
                    <a href="#">სპონსორები</a>
                </div>
                <div className="column">
                    <h4>კონტაქტი</h4>
                    <a href="#">Contact Us</a>
                    <a href="#">Privicy Policy</a>
                    <a href="#">Terms & Conditions</a>
                </div>
            </footer>
            <div className="copyright">© 2024. Made by Gio Gagnidze</div>
        </>
    );
}

export default Main;
