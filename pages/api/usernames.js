export default function handler(req, res) {
  res.status(200).json({
    usernames: [
      'TinyWugaga',
      'GitHub',
      'Vercel',
      'Octokit',
      'Notion',
      'Meta'
    ]
  })
}
