import react from 'react';
import './Banner.scss';
import PostChild from '../postChild/PostChild';
const Banner = () => {
  return (
    <div className="banner">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/images/hinh3.jpg"
              className="d-block w-100 image_banner"
              alt="..."
              height="650px"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/hinh4.jpg"
              className="d-block w-100 image_banner"
              alt="..."
              height="650px"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/images/hinh3.jpg"
              className="d-block w-100 image_banner"
              alt="..."
              height="650px"
            />
          </div>
        </div>
      </div>
      <div className="banner_content">
        <div className="container  ">
          <div className="row">
            <div className="col-lg-7 col-md-6 col-sm-12">
              <div className="baner_content-title">
                <div className="baner_content-title-info">
                  <h6>Post</h6>
                  <h2>
                    <a href="">
                      Physical Exercise to Boost Your Brain and Stamina
                    </a>
                  </h2>
                  <div className="detail_post">
                    <span className="detail_post-author">
                      <span>By</span>
                      <a href="">Duy Son</a>
                    </span>
                    <time className="detail_post-author">April 28, 2019</time>
                    <span className="detail_post-view">
                      <i className="fas fa-eye"></i>
                      <span className="view_count_number">2.6k</span>
                      <span className="view_count_label">Views</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12">
              <div className="baner_content-listpost">
                <h4>What's Hot</h4>
                <PostChild />
                <PostChild />
                <PostChild />
                <PostChild />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
