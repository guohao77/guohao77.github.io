/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import * as THREE from '../../build/three.module.js'

function main () {
    console.log("Hellow World")
    const canvas =document.querySelector('#c');
    //const renderer = new THREE.WebGLRenderer({canvas});
    const renderer = new THREE.WebGLRenderer({canvas});
    const fov =75; 
    const aspect =2; 
    const near =0.1; 
    const far =5; 
    const camera =new THREE.PerspectiveCamera(fov,aspect, near, far);
    
    camera.position.z =2; 
    
    // scene 
    
    const scene =new THREE.Scene(); 
    {
        const color =0xFFFFFF; 
        const intensity =1; 
        const light =new THREE.DirectionalLight(color, intensity);
        light.position.set (-1,2,4);
        scene.add(light);
    }
    
    const boxWidth =1, boxHeight=1, boxDepth=1;
    const geometry =new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
    const material =new THREE.MeshPhongMaterial ({color: 0x44aa88});
    const cube =new THREE.Mesh (geometry, material);
    scene.add(cube);
    
    function render (time)
    {
        time *=.001;
        cube.rotation.x= time;
        cube.rotation.y= time;
        renderer.render(scene, camera);
        requestAnimationFrame(render)
    }
    
    requestAnimationFrame(render)
    
}

main();

