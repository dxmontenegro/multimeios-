export default async function handler(req, res) {

  try {

    const resposta = await fetch(
      "https://bdjqajzhlkdfagdfknmh.supabase.co/rest/v1/registros?select=*&limit=1",
      {
        headers: {
          apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkanFhanpobGtkZmFnZGZrbm1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3NTA5MDcsImV4cCI6MjA4NjMyNjkwN30.hxh4adeSNM7FazeNkinwPrJEZdxsZkhtPTB5zU6eub0"
        }
      }
    );

    if (!resposta.ok) throw new Error("erro");

    res.status(200).json({ status: "ok" });

  } catch (e) {
    res.status(500).json({ status: "erro" });
  }
}
