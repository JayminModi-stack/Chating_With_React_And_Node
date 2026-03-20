import React from "react";
import { Modal, Carousel } from "antd";

function CarouselModel({ carouselData, isModalOpen, handleOk, handleCancel }) {
  return (
    <Modal
      title="Image Carousel"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      width={{
        xs: "90%",
        sm: "80%",
        md: "70%",
        lg: "60%",
        xl: "50%",
        xxl: "40%",
      }}
    >
      <Carousel arrows infinite={false}>
        {carouselData.map((media, index) => {
          const fileExtension = media.url.split(".").pop().toLowerCase();
          const isImage = ["png", "jpg", "jpeg"].includes(fileExtension);
          const isVideo = ["mp4", "webm"].includes(fileExtension);

          return (
            <div key={index}>
              {isImage ? (
                <img
                  src={media.url}
                  alt={`Slide-${index}`}
                  style={{
                    width: "100%",
                    maxHeight: "300px",
                    objectFit: "cover",
                  }}
                />
              ) : isVideo ? (
                <video controls>
                  <source src={media.url} type={`video/${fileExtension}`} />
                  Your browser does not support the video tag.
                </video>
              ) : null}
            </div>
          );
        })}
      </Carousel>
    </Modal>
  );
}

export default CarouselModel;
