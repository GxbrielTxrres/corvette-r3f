export const shaders = {
	vertexShader: `
    varying vec2 vUv; 

    void main() {
    vUv = uv;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
  }
`,
	fragmentShader: `
    varying vec2 vUv;
    uniform float time;
    uniform float sinScalar;

    float noise(vec2 uv){
        return fract(sin(dot(uv,vec2(12.9898,78.233))) * 43758.5453123);
    }

    void main() {
        
        vec2 uv_time_shifted = vec2(vUv.x + time, vUv.y - time);
      
        // Create a color using a gradient with time-shifted uv coordinates
        vec3 color = vec3(
            0.5 * sin(sinScalar * 3.1416 * uv_time_shifted.x) + 0.5,
            0.5 * sin(sinScalar * 3.1416 * uv_time_shifted.y + time) + 0.5,
            0.5 * sin(sinScalar * 3.1416 * (uv_time_shifted.x + uv_time_shifted.y) + time) + 0.5
        );
        
        gl_FragColor = vec4(color, 1.0);

    // vec3 color = vec3(0.5 + 0.5*cos(time), vUv.y, vUv.x);
  }`,
};
