import { Db } from "@/utils/firebase";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";

const Home = () => {
  const [user, setUser] = useState<any>([]);

  const usercurentlist = collection(Db, "products");

  useEffect(() => {
    const getMoviList = async () => {
      try {
        const data = await getDocs(usercurentlist);
        const filterdata = data.docs.map((doc) => ({
          ...doc?.data(),
          id: doc?.id,
        }));
        setUser(filterdata);
      } catch (error) {
        console.log(error, "error");
      }
    };

    getMoviList();
  }, []);

  return (
    <div>
      Home
      <div>
        {user.map((e: any) => (
          <div key={e.age}>
            <h1>{e.name}</h1>
            <h1>{e.sorname}</h1>
            <p>{e.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
