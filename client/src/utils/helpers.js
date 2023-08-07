import { Auth } from "./Auth";

export const queryServer = async (query,variables = null) => {
  try {
    const res = await fetch('http://localhost:3001/graphql',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        'authorization': 'empty',
      },
      body: JSON.stringify({query,variables})
    })
    return res.json();
  } catch (err) {
    console.log(err);
    return {err};
  }
}