import SectionHeadng from "@/components/Hepler/SectionHeading";
import { blogs } from "@/Data/data";
import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <section id="course">
      <div className="pt-16 pb-16 bg-[#0f0715]">

        <SectionHeadng>Course</SectionHeadng>

        <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 items-center">

          {blogs.map((blog, i) => {
            return (
              <div
                key={blog.id}
                data-aos="zoom-in"
                data-aos-anchor-placement="top-center"
                data-aos-delay={i * 150}
              >
                <BlogCard blog={blog} />
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Blog;