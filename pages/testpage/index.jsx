import styled from "styled-components";

import useWindowScroll from "@/lib/hook/useWindowScroll";
import { ProfileLayout } from "@/components/Layout";
import List from "@/components/List";
import { CardPaper, CardHeader, CardContent } from "@/components/Card";
import RepoArticle from "@/components/RepoArticle";

const TEST_DATA_LIST = [
  {
    title: "Tetesta",
    subtitle: "test and no data thinking",
    attachment: "1",
    link: "/testpage"
  },
  {
    title: "Tetesta",
    subtitle: "test and no data thinking",
    attachment: "2",
    link: "/testpage"
  },
  {
    title: "Tetesttesta",
    subtitle: "test and no data thinking",
    attachment: "3",
    link: "/testpage"
  },
  {
    title: "Tetesttesta",
    subtitle: "test and no data thinking",
    attachment: "4",
    link: "/testpage"
  },
  {
    title: "Tetesttesta",
    subtitle: "test and no data thinking",
    attachment: "5",
    link: "/testpage"
  },
  {
    title: "Tetesttergbasta",
    subtitle: "test and no data thinking",
    attachment: "1",
    link: "/testpage"
  },
  {
    title: "Tatesttergbastb",
    subtitle: "test and no data thinking",
    attachment: "2",
    link: "/testpage"
  },
  {
    title: "Tatesttergbastgb",
    subtitle: "test and no data thinking",
    attachment: "3",
    link: "/testpage"
  },
  {
    title: "Tatestgbrgba",
    subtitle: "test and no data thinking",
    attachment: "4",
    link: "/testpage"
  },
  {
    title: "Tatestgbrgba",
    subtitle: "test and no data thinking",
    attachment: "5",
    link: "/testpage"
  },
  {
    title: "Tatestgergba",
    subtitle: "test and no data thinking",
    attachment: "1",
    link: "/testpage"
  },
  {
    title: "Tatestgec",
    subtitle: "test and no data thinking",
    attachment: "2",
    link: "/testpage"
  },
  {
    title: "Tbtestgec",
    subtitle: "test and no data thinking",
    attachment: "3",
    link: "/testpage"
  },
  {
    title: "Ttestbectestd",
    subtitle: "test and no data thinking",
    attachment: "4",
    link: "/testpage"
  },
  {
    title: "Ttestbectestd",
    subtitle: "test and no data thinking",
    attachment: "1",
    link: "/testpage"
  },
  {
    title: "Ttestbectestd",
    subtitle: "test and no data thinking",
    attachment: "2",
    link: "/testpage"
  },
  {
    title: "Ttestbcctestd",
    subtitle: "test and no data thinking",
    attachment: "3",
    link: "/testpage"
  },
  {
    title: "Ttestbctestd",
    subtitle: "test and no data thinking",
    attachment: "4",
    link: "/testpage"
  },
  {
    title: "Ttestac",
    subtitle: "test and no data thinking",
    attachment: "5",
    link: "/testpage"
  }
];

function Test({ title, ...props }) {
  useWindowScroll(e => {
    if (!e.target) return;
  });
  return (
    <ProfileLayout
      title={title}
      profile={{
        image: "https://avatars.githubusercontent.com/u/47549832?v=4",
        name: "Tiny"
      }}
      {...props}
    >
      <CardPaper>
        <CardHeader>{"Test Repo"}</CardHeader>
        <CardContent>
          <RepoArticle
            repo={{
              description: "test and no data thinking",
              stargazers_count: 2,
              watchers: 5,
              forks: 6,
              languages_url: 'https://api.github.com/repos/sous-chefs/php/languages',
              html_url: 'https://github.com/notion/chef-php',
            }}
          />
        </CardContent>
      </CardPaper>
      {/* <List data={TEST_DATA_LIST} /> */}
    </ProfileLayout>
  );
}

export default Test;
