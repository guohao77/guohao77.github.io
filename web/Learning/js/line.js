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
    
 // GEOMETRY
    var geometry = new THREE.Geometry();
    geometry.vertices.push(
        new THREE.Vector3(0, -1, 0),
        new THREE.Vector3(1, 0, 0),
        new THREE.Vector3(0, 1, 0));
 
    // The Line
    var line = new THREE.Line(geometry, new THREE.LineBasicMaterial({
                color: 0x0000ff
            }));
    scene.add(line);
 
    
    function render (time)
    {
        time *=.001;
         
        if (resizeRendererToDisplaySize(renderer)) 
        {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth/canvas.clientHeight;
        camera.updateProjectionMatrix(); 
        }
        
        line.rotation.x= time;
        line.rotation.y= time;
        renderer.render(scene, camera);
        requestAnimationFrame(render)
    }
    
    requestAnimationFrame(render)
    
}
// judge wether the render need to update display size
//function resizeRendererToDisplaySize(renderer) {
//  const canvas = renderer.domElement;
//  const width = canvas.clientWidth;
//  const height = canvas.clientHeight;
//  const needResize = canvas.width !== width || canvas.height !== height;
//  if (needResize) {
//    renderer.setSize(width, height, false);
//  }
//  return needResize;
//}


 function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const pixelRatio = window.devicePixelRatio;
    const width  = canvas.clientWidth  * pixelRatio | 0;
    const height = canvas.clientHeight * pixelRatio | 0;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

main();

