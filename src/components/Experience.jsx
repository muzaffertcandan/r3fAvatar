import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";
// console.log(Avatar);
export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <group  position-y={-1}>
        <Avatar />
      </group>
      {/* <MyAvatar/> */}
      {/* <Human/> */}
      {/* <Model/> */}
      <ambientLight intensity={1} />
    </>
  );
};
