import { useTranslations } from 'next-intl';
import HomePageLayout from '@/components/home-page-layout';
import { Col, Row } from 'antd';
import Image from 'next/image';
import Logo from '@/public/image/logo.svg';
import BigKent from '@/public/image/big-kent.png';
import WUG1 from '@/public/image/what-u-get-1.svg';
import WUG2 from '@/public/image/what-u-get-2.svg';
import WUG3 from '@/public/image/what-u-get-3.svg';

export default function IndexPage() {
  const t = useTranslations('IndexPage');
  // <p className="max-w-[590px]">title={t('title')}</p>

  return (
    <HomePageLayout>
      <div className="home-hero">
        <section className="global-container" style={{ height: '100%' }}>
          <section className="content">
            <Row gutter={16} className="content-row">
              <Col xs={24} md={24} lg={24} xl={12} xxl={12}>
                <Row>
                  <Col xxl={24} xl={24}>
                    <div className="logo">
                      <Image src={Logo} width={48} height={48} alt="logo" />
                      <h2>the big kent</h2>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={16} md={16} lg={16} xl={24} xxl={24}>
                    <div className="title">
                      <h1>BE SPIRITED FEARLESS AN EVERYDAY ATHLETE</h1>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={16} md={16} lg={16} xl={24} xxl={24}>
                    <div className="desc">
                      <p>
                        A certified fitness coach and personal trainer for over
                        a 2 years, I’ve helped thousands of people through 1-1
                        personalized coaching and fitness club.
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row className="btn-row">
                  <Col xl={24} xxl={24}>
                    <div className="btn">
                      <button>
                        <span>view plans</span>
                      </button>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <div className="what-you-get">
                    <h1>what you get</h1>
                    <Row className="boxes" gutter={24}>
                      <Col className="wug-box" xl={8} xxl={8}>
                        <Image src={WUG1} width={38} height={50} alt="wug1" />
                        <h4>customised fitness plan</h4>
                      </Col>
                      <Col className="wug-box" xl={8} xxl={8}>
                        <Image src={WUG2} width={38} height={50} alt="wug1" />
                        <h4>keep you feet and strong</h4>
                      </Col>
                      <Col className="wug-box" xl={8} xxl={8}>
                        <Image src={WUG3} width={38} height={50} alt="wug1" />
                        <h4>high intensity training</h4>
                      </Col>
                    </Row>
                  </div>
                </Row>
              </Col>
              <Col xs={24} md={24} lg={24} xl={12} xxl={12}>
                <div className="img-wrapper">
                  <Image src={BigKent} layout="responsive" alt="the big kent" />
                </div>
              </Col>
            </Row>
          </section>

          <div className="vertical-text">
            <h3>
              you are fearless - you are fearless -you are fearless - you are
              fearless - you are fearless - you are fearless
            </h3>
          </div>
        </section>
      </div>
      {/* <div className="home-who-i-am">
        <h1>Atakan</h1>
        <h1>Atakan</h1>
        <h1>Atakan</h1>
        <h1>Atakan</h1>
        <h1>Atakan</h1>
        <h1>Atakan</h1>
        <h1>Atakan</h1>
        <h1>Atakan</h1>
      </div> */}
    </HomePageLayout>
  );
}
