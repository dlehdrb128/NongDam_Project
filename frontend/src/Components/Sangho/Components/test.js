// import { useState, useRef, useEffect } from "react";
// import axios from "axios";

// const Test = () => {
//   useEffect(() => {
//     let URL = "http://localhost:8080/test";
//     const getData = axios.get(URL, {
//       responseType: "blob",
//     });

//     getData
//       .then((result) => {
//         console.log(result);
//         // let blob = new Blob([new ArrayBuffer(result.data)], {
//         //   type: "image/png",
//         // });

//         // const myFile = new File([result.data], "imageName");
//         // const reader = new FileReader();
//         // reader.onload = (ev) => {
//         //   const previewImage = String(ev.target.result);
//         //   setImg(previewImage);
//         // };
//         // reader.readAsDataURL(myFile);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const imgSrc = useRef();

//   const [img, setImg] = useState("");
//   console.log(img);

//   const onsubmit = async (e) => {
//     let URL = "http://localhost:8080/upload";
//     console.log(img);

//     const formData = new FormData();
//     formData.append("img", img);
//     formData.append("key", 15);

//     const request = await axios.post(URL, formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });

//     console.log(request);
//   };

//   const onChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       const reader = new FileReader();
//       reader.readAsDataURL(e.target.files[0]);
//       setImg(e.target.files[0]);

//       reader.onload = (e) => {
//         console.log(e);
//         console.log(reader);
//         imgSrc.current.src = reader.result;
//       };

//       // const previewImage = imgSrc.current.src
//     }
//   };

//   return (
//     <>
//       <div>
//         <img src="" alt="" ref={imgSrc} />
//         <input type="file" name="img" onChange={onChange} />
//         <button onClick={onsubmit}>전송</button>
//       </div>
//     </>
//   );
// };

// export default Test;
