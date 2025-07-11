import { blogData } from "@/lib/data";
import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <section className="blog" id="blog">
      <div className="sectionContainer">
        <div className="sectionHeader overflow-x-hidden">
          <h2 data-aos="fade-right" className="sectionTitle">
            Stay Updated with Our Tips & Service News!
          </h2>

          <div data-aos="fade-left" className="sectionInfo">
            <h3>our blog</h3>
            <p>
              Stay informed with our latest cleaning tips, service updates,
              expert advice on maintaining an immaculate home
            </p>
          </div>
        </div>

        <div className="blogContainer overflow-hidden">
          {blogData?.map((blog, index) => (
            <div
              key={blog?.id}
              data-aos="flip-down"
              data-aos-delay={index * 100}
              className="blogBox"
            >
              <Image width={370} src={blog?.pic} alt={blog?.title} />

              <div className="blogContent">
                <div className="blogMetaInfo">
                  <span>🖊️ {blog?.author}</span>
                  <span>📅 {new Date(blog?.date).toDateString().slice(4)}</span>
                </div>
                <h3 className="blogTitle">{blog?.title}</h3>
                <p className="blogText">{blog?.blogText}...</p>
              </div>

              <button>Read More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
