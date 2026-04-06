import { createClient } from "@supabase/supabase-js";

export async function GET() {
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_PUBLISHABLE_DEFAULT_KEY,
  );

  const { data, error } = await supabase
    .from("reviews")
    .select("id, author_name, rating, comment, review_date");

  if (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error }), {
      status: 500,
    });
  }

  // mélange les avis
  const shuffled = data.sort(() => 0.5 - Math.random());

  // prend 4 avis aléatoires
  const randomReviews = shuffled.slice(0, 4);

  return new Response(
    JSON.stringify({ success: true, reviews: randomReviews }),
    {
      status: 200,
    },
  );
}
