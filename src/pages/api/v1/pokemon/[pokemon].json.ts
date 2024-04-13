export const prerender = false;

import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params }) => {
  console.log(`Method called with params: ${JSON.stringify(params)}`);
  const pokemon = params.pokemon;
  try{
    console.log("Trying to call API");
    const data = await fetch(`${import.meta.env.BASE_POKE_URL}/pokemon/${pokemon}`);
    const response = await data.json();
    console.log("Succesful response");
    return new Response(JSON.stringify(response));
  }
  catch(error){
    console.log(`There was an error calling the API: ${error}`);
    return new Response(null, {
      status: 404,
      statusText: 'Pokemon Not found', 
    });
  }
};