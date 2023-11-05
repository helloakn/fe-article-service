import React, { useEffect, useRef, useState } from "react";

import styled from "styled-components";

const Container = styled.div`
    background-color: var(--secondary-bg-color);
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor:pointer;
    border-radius: 10px;
    color:var(--main-fore-color);
    text-shadow: .5px .5px var(--main-bg-color);
    text-align:center;
    border:1px solid var(--main-border-color);

    background-repeat: no-repeat;
    background-size: contain, cover;
    background-position: center;

    width::${props=>props.direction?props.directin:"100px"};
    height:${props=>props.direction?props.directin:"100px"};

    &:hover{
      text-shadow: .5px .5px var(--white);
      background-color: var(--main-bg-color);
    }
`;

export default function ImagePicker({ ...props }) {
   
    let dimension = props.dimension || 200;

    const inputFileRef = useRef( null );
    const imageContainer = useRef( null );

   const asyncUseEff = async ()=>{
      if(props.image && imageContainer){
        //alert(props.image);
        imageContainer.current.style.backgroundImage =  "url('"+props.image+"')";
      }
    }

    // useEffect(() => asyncUseEff(),[])

    useEffect(() => {
      asyncUseEff();
   });

    const pickerOnChange =(e)=>{
        e.preventDefault();
        readURL(inputFileRef.current,imageContainer.current);
    }
    const btnClick = (e)=>{
        e.preventDefault();
        inputFileRef.current.click();
    }

    const readURL=(input,divContainer)=>{
        let uploadFilebase64 = "";
        let uploadFilebase64Name = "";
        let index = 0;
        if (input.files && input.files[0]) {
            let file = input.files[0];
            props.setImageFile(file);
            ///console.log(file.name);
            if (file.type.match('image.*')) {
                var reader = new FileReader();
                uploadFilebase64Name =file.name;
                reader.onload = function(e) {
                    console.log("reader on load");
                    //console.log(e.target.result);
                    var image = new Image();
                    image.onload = function (imageEvent) {
                        console.log('image on load');
                        // Resize the image
                        var canvas = document.createElement('canvas'),
                            max_size = 540,// TODO : pull max size from a site config
                            width = image.width,
                            height = image.height;
                        if (width > height) {
                            if (width > max_size) {
                                height *= max_size / width;
                                width = max_size;
                            }
                        } else {
                            if (height > max_size) {
                                width *= max_size / height;
                                height = max_size;
                            }
                        }
                        canvas.width = width;
                        canvas.height = height;
                        canvas.getContext('2d').drawImage(image, 0, 0, width, height);
                        var dataUrl = canvas.toDataURL('image/jpeg');

                        
                        uploadFilebase64 = dataUrl;
                       
                    }
                    image.src = e.target.result;
                    
                    divContainer.style.backgroundImage =  "url('"+e.target.result+"')";
                    // props.setState({pickerImg:e.target.result});
                    props.setCategoryImage(e.target.result);
                    
                }

                reader.readAsDataURL(input.files[0]); // convert to base64 string
            }
        }
        
    }//end readURL
    
    return(
        <>
            <input 
                type="file"
                onChange={pickerOnChange}
                style={{display:"none"}}
                ref={inputFileRef}
                name="pickerImg"
                accept="image/png, image/jpeg"
            />
                
            <Container 
                style={{width:dimension,height:dimension}}
                onClick={btnClick}
                ref={imageContainer}
            >
                
                Click me<br/>to Pick the image.
            </Container>
        </>
    );

}