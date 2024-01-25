import React, { useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import Headers from "../Components/Headers";
import { IoMdCloudUpload } from "react-icons/io";
import "./addproducts.css";

const Addproduct = () => {
  //   const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
      const selectImage = document.querySelector(".select-image");
      const inputFile = document.querySelector("#file");
      const imgArea = document.querySelector(".img-area");

      const handleSelectImage = () => {
        inputFile.click();
      };

      const handleFileChange = () => {
        const image = inputFile.files[0];

        if (image.size < 2000000) {
          const reader = new FileReader();
          reader.onload = () => {
            const allImg = imgArea.querySelectorAll("img");
            allImg.forEach((item) => item.remove());
            const imgUrl = reader.result;
            const img = document.createElement("img");
            img.src = imgUrl;
            imgArea.appendChild(img);
            imgArea.classList.add("active");
            imgArea.dataset.img = image.name;
            //   setSelectedImage(image);
          };
          reader.readAsDataURL(image);
        } else {
          alert("Image size more than 2MB");
        }
      };

      selectImage.addEventListener("click", handleSelectImage);
      inputFile.addEventListener("change", handleFileChange);

      return () => {
        selectImage.removeEventListener("click", handleSelectImage);
        inputFile.removeEventListener("change", handleFileChange);
      };
    }, []);

  return (
    <div className="">
      <div className="flex bg-gray-100 overflow-hidden h-screen w-screen flex-row ">
        <Sidebar />
        <div className="p-4 pt-0 text-2xl font-semibold flex-1 h-screen overflow-y-scroll">
          <Headers props={true}/>
          <div className="flex items-center p-2">
            <h1 className="uppercase text-3xl text-slate-500">
              Add New Product
            </h1>
          </div>

          <div className="bg-white flex justify-center items-start h-[77vh] p-7 overflow-y-auto">
            <div className="container2">
              <input type="file" id="file" accept="image/*" hidden />
              <div className="flex items-center justify-center">
                <div className="img-area" data-img="">
                  <IoMdCloudUpload className="icon" color="grey"/>
                  <h3>Upload Image</h3>
                  <p>
                    Image size must be less than <span>2MB</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
              <button className="select-image w-[60%] bg-green-300 hover:bg-green-500 mb-5">
                Select Image
              </button>
              </div>
              <div className="name">
                <input type="text" placeholder="Name" className="border-b-2 border-b-solid border-b-gray-400 focus:border-b-black w-full outline-none p-2 mb-5 bg-gray-100 font-normal" />
                <input type="number" placeholder="Price" className="border-b-2 border-b-solid border-b-gray-400 focus:border-b-black w-full outline-none p-2 mb-5 bg-gray-100 font-normal" />
                <input type="text" placeholder="Category" className="border-b-2 border-b-solid border-b-gray-400 focus:border-b-black w-full outline-none p-2 mb-5 bg-gray-100 font-normal" />
                <input type="number" placeholder="In Stock" className="border-b-2 border-b-solid border-b-gray-400 focus:border-b-black w-full outline-none p-2 mb-5 bg-gray-100 font-normal" />
                <button className="select-image w-full bg-green-300 hover:bg-green-500">
                Save Item
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addproduct;
