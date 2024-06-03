import { useEffect, useRef, useState } from "react";
import Layout from "./layout";
import { BallManager } from "./utils/classes/BallManager";
import axios from "axios";

const App = () => {
  const [ballManager, setBallManager] = useState<BallManager>();
  const canvasRef = useRef<any>();

  useEffect(() => {
    if (canvasRef.current) {
      const ballManager = new BallManager(
        canvasRef.current as unknown as HTMLCanvasElement
      );
      setBallManager(ballManager);
    }
  }, [canvasRef]);

  const onClickAddBall = async () => {
    const response = await axios.post(`http://localhost:3000/game`, {
      data: 1,
    });
    if (ballManager) {
      ballManager.addBall(response.data.point);
    }
  };

  return (
    <Layout onClickAddBall={onClickAddBall}>
      <div className="w-full h-full">
        <canvas width="800" height="800" ref={canvasRef}></canvas>
      </div>
    </Layout>
  );
};

export default App;
