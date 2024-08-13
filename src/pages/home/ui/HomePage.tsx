import { Container, Section, Title } from "@/shared";
import { Slide, Slider } from "./swiper";
import { SmallBanner } from "./small-banner";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { IPost, PostList } from "@/entities/post";
import { ILink, Links } from "./links";
import { Docs, IDoc } from "./docs";
import Image from "next/image";
import { PostSlider } from "@/entities/post/ui/post-slider";
import { FeedbackForm } from "@/widgets/feedback-form/ui/feedback-form";

const slides: Array<Slide> = [
  {
    id: "asd1",
    title:
      "Как записаться на прием к врачу через Единый портал государственных услуг",
    description: "Как записаться на прием к врачу подробности",
    imageUrl:
      "https://rmiac18.ru/upload/iblock/cc4/ryy4ac1l5bs7a6pn4zd5ewldzv4f71yu.webp",
    href: "/",
    linkText: "Подробнее",
  },
  {
    id: "asd2",
    title:
      "Как записаться на прием к врачу через Единый портал государственных услуг",
    description: "Как записаться на прием к врачу подробности",
    imageUrl:
      "https://rmiac18.ru/upload/iblock/cc4/ryy4ac1l5bs7a6pn4zd5ewldzv4f71yu.webp",
    href: "/",
    linkText: "Подробнее",
  },
  {
    id: "asd3",
    title:
      "Как записаться на прием к врачу через Единый портал государственных услуг",
    description: "Как записаться на прием к врачу подробности",
    imageUrl:
      "https://rmiac18.ru/upload/iblock/cc4/ryy4ac1l5bs7a6pn4zd5ewldzv4f71yu.webp",
    href: "/",
    linkText: "Подробнее",
  },
  {
    id: "asd4",
    title:
      "Как записаться на прием к врачу через Единый портал государственных услуг",
    description: "Как записаться на прием к врачу подробности",
    imageUrl:
      "https://rmiac18.ru/upload/iblock/cc4/ryy4ac1l5bs7a6pn4zd5ewldzv4f71yu.webp",
    href: "/",
    linkText: "Подробнее",
  },
];

const posts: Array<IPost> = [
  {
    id: "bbb1",
    title: "Заголовок поста 1",
    description: "Описание поста 1",
    content:
      "Cras vestibulum libero vel diam mattis, ut commodo sapien malesuada. Pellentesque lacinia mi nibh, eget ullamcorper eros lobortis elementum. Nullam et molestie tellus, in ultrices ipsum. Pellentesque feugiat elit et felis finibus, a viverra tortor elementum. Aenean consequat tempus lacus sed congue. Nam venenatis posuere sagittis. Aenean eu sapien ultrices dolor sodales condimentum non ac turpis. Mauris molestie massa ac ipsum ullamcorper, vitae pulvinar justo mollis. Pellentesque neque mi, tincidunt ut velit in, luctus euismod quam.",
    tags: [
      {
        id: "fff1",
        value: "Здравоохранение",
      },
    ],
    publishedAt: new Date(),
  },
  {
    id: "bbb2",
    title: "Заголовок поста 1",
    description: "Описание поста 1",
    content:
      "Cras vestibulum libero vel diam mattis, ut commodo sapien malesuada. Pellentesque lacinia mi nibh, eget ullamcorper eros lobortis elementum. Nullam et molestie tellus, in ultrices ipsum. Pellentesque feugiat elit et felis finibus, a viverra tortor elementum. Aenean consequat tempus lacus sed congue. Nam venenatis posuere sagittis. Aenean eu sapien ultrices dolor sodales condimentum non ac turpis. Mauris molestie massa ac ipsum ullamcorper, vitae pulvinar justo mollis. Pellentesque neque mi, tincidunt ut velit in, luctus euismod quam.",
    tags: [
      {
        id: "fff1",
        value: "Здравоохранение",
      },
    ],
    publishedAt: new Date(),
  },
  {
    id: "bbb3",
    title: "Заголовок поста 1",
    description: "Описание поста 1",
    content:
      "Cras vestibulum libero vel diam mattis, ut commodo sapien malesuada. Pellentesque lacinia mi nibh, eget ullamcorper eros lobortis elementum. Nullam et molestie tellus, in ultrices ipsum. Pellentesque feugiat elit et felis finibus, a viverra tortor elementum. Aenean consequat tempus lacus sed congue. Nam venenatis posuere sagittis. Aenean eu sapien ultrices dolor sodales condimentum non ac turpis. Mauris molestie massa ac ipsum ullamcorper, vitae pulvinar justo mollis. Pellentesque neque mi, tincidunt ut velit in, luctus euismod quam.",
    tags: [
      {
        id: "fff1",
        value: "Здравоохранение",
      },
    ],
    publishedAt: new Date(),
  },
  {
    id: "bbb4",
    title: "Заголовок поста 1",
    description: "Описание поста 1",
    content:
      "Cras vestibulum libero vel diam mattis, ut commodo sapien malesuada. Pellentesque lacinia mi nibh, eget ullamcorper eros lobortis elementum. Nullam et molestie tellus, in ultrices ipsum. Pellentesque feugiat elit et felis finibus, a viverra tortor elementum. Aenean consequat tempus lacus sed congue. Nam venenatis posuere sagittis. Aenean eu sapien ultrices dolor sodales condimentum non ac turpis. Mauris molestie massa ac ipsum ullamcorper, vitae pulvinar justo mollis. Pellentesque neque mi, tincidunt ut velit in, luctus euismod quam.",
    tags: [
      {
        id: "fff1",
        value: "Здравоохранение",
      },
    ],
    publishedAt: new Date(),
  },
  {
    id: "bbb5",
    title: "Заголовок поста 1",
    description: "Описание поста 1",
    content:
      "Cras vestibulum libero vel diam mattis, ut commodo sapien malesuada. Pellentesque lacinia mi nibh, eget ullamcorper eros lobortis elementum. Nullam et molestie tellus, in ultrices ipsum. Pellentesque feugiat elit et felis finibus, a viverra tortor elementum. Aenean consequat tempus lacus sed congue. Nam venenatis posuere sagittis. Aenean eu sapien ultrices dolor sodales condimentum non ac turpis. Mauris molestie massa ac ipsum ullamcorper, vitae pulvinar justo mollis. Pellentesque neque mi, tincidunt ut velit in, luctus euismod quam.",
    tags: [
      {
        id: "fff1",
        value: "Здравоохранение",
      },
    ],
    publishedAt: new Date(),
  },
  {
    id: "bbb6",
    title: "Заголовок поста 1",
    description: "Описание поста 1",
    content:
      "Cras vestibulum libero vel diam mattis, ut commodo sapien malesuada. Pellentesque lacinia mi nibh, eget ullamcorper eros lobortis elementum. Nullam et molestie tellus, in ultrices ipsum. Pellentesque feugiat elit et felis finibus, a viverra tortor elementum. Aenean consequat tempus lacus sed congue. Nam venenatis posuere sagittis. Aenean eu sapien ultrices dolor sodales condimentum non ac turpis. Mauris molestie massa ac ipsum ullamcorper, vitae pulvinar justo mollis. Pellentesque neque mi, tincidunt ut velit in, luctus euismod quam.",
    tags: [
      {
        id: "fff1",
        value: "Здравоохранение",
      },
    ],
    publishedAt: new Date(),
  },
  {
    id: "bbb7",
    title: "Заголовок поста 1",
    description: "Описание поста 1",
    content:
      "Cras vestibulum libero vel diam mattis, ut commodo sapien malesuada. Pellentesque lacinia mi nibh, eget ullamcorper eros lobortis elementum. Nullam et molestie tellus, in ultrices ipsum. Pellentesque feugiat elit et felis finibus, a viverra tortor elementum. Aenean consequat tempus lacus sed congue. Nam venenatis posuere sagittis. Aenean eu sapien ultrices dolor sodales condimentum non ac turpis. Mauris molestie massa ac ipsum ullamcorper, vitae pulvinar justo mollis. Pellentesque neque mi, tincidunt ut velit in, luctus euismod quam.",
    tags: [
      {
        id: "fff1",
        value: "Здравоохранение",
      },
    ],
    publishedAt: new Date(),
  },
  {
    id: "bbb8",
    title: "Заголовок поста 1",
    description: "Описание поста 1",
    content:
      "Cras vestibulum libero vel diam mattis, ut commodo sapien malesuada. Pellentesque lacinia mi nibh, eget ullamcorper eros lobortis elementum. Nullam et molestie tellus, in ultrices ipsum. Pellentesque feugiat elit et felis finibus, a viverra tortor elementum. Aenean consequat tempus lacus sed congue. Nam venenatis posuere sagittis. Aenean eu sapien ultrices dolor sodales condimentum non ac turpis. Mauris molestie massa ac ipsum ullamcorper, vitae pulvinar justo mollis. Pellentesque neque mi, tincidunt ut velit in, luctus euismod quam.",
    tags: [
      {
        id: "fff1",
        value: "Здравоохранение",
      },
    ],
    publishedAt: new Date(),
  },
  {
    id: "bbb9",
    title: "Заголовок поста 1",
    description: "Описание поста 1",
    content:
      "Cras vestibulum libero vel diam mattis, ut commodo sapien malesuada. Pellentesque lacinia mi nibh, eget ullamcorper eros lobortis elementum. Nullam et molestie tellus, in ultrices ipsum. Pellentesque feugiat elit et felis finibus, a viverra tortor elementum. Aenean consequat tempus lacus sed congue. Nam venenatis posuere sagittis. Aenean eu sapien ultrices dolor sodales condimentum non ac turpis. Mauris molestie massa ac ipsum ullamcorper, vitae pulvinar justo mollis. Pellentesque neque mi, tincidunt ut velit in, luctus euismod quam.",
    tags: [
      {
        id: "fff1",
        value: "Здравоохранение",
      },
    ],
    publishedAt: new Date(),
  },
];

const links: Array<ILink> = [
  {
    id: "asd2321",
    href: "/asd",
    title: "Мониторинг адресов",
    description: "сервис по проверке адресов медучреждений",
  },
  {
    id: "asd2321",
    href: "/asd",
    title: "Мониторинг адресов",
    description: "сервис по проверке адресов медучреждений",
  },
  {
    id: "asd2321",
    href: "/asd",
    title: "Мониторинг адресов",
    description: "сервис по проверке адресов медучреждений",
  },
  {
    id: "asd2321",
    href: "/asd",
    title: "Мониторинг адресов",
    description: "сервис по проверке адресов медучреждений",
  },
  {
    id: "asd2321",
    href: "/asd",
    title: "Мониторинг адресов",
    description: "сервис по проверке адресов медучреждений",
  },
  {
    id: "asd2321",
    href: "/asd",
    title: "Мониторинг адресов",
    description: "сервис по проверке адресов медучреждений",
  },
  {
    id: "asd2321",
    href: "/asd",
    title: "Мониторинг адресов",
    description: "сервис по проверке адресов медучреждений",
  },
  {
    id: "asd2321",
    href: "/asd",
    title: "Мониторинг адресов",
    description: "сервис по проверке адресов медучреждений",
  },
  {
    id: "asd2321",
    href: "/asd",
    title: "Мониторинг адресов",
    description: "сервис по проверке адресов медучреждений",
  },
];

const docs: Array<IDoc> = [
  {
    id: "kkk2",
    href: "/",
    mimeType: "pdf",
    size: "112.31",
    title: "Свидетельство о гос регистрации программы для ЭВМ",
  },
  {
    id: "kkk2",
    href: "/",
    mimeType: "pdf",
    size: "112.31",
    title: "Выписка из реестра аккредитованных организаций",
  },
  {
    id: "kkk2",
    href: "/",
    mimeType: "docx",
    size: "112.31",
    title: "Инструкция по порядку и срокам прохождения аттестации",
  },
];

export default function Home() {
  return (
    <>
      <Section className="section-banner py-[25px]">
        <Container className="flex flex-wrap">
          <Slider
            slides={slides}
            className="lg:w-[66%] w-full lg:mb-0 sm:mb-5 mb-[5px]"
          ></Slider>
          <div className="banners lg:w-[34%] w-full lg:pl-[30px] flex lg:gap-x-[0] md:gap-x-[10px] flex-wrap">
            <SmallBanner
              href="/"
              imageUrl="/small-banner-1.webp"
              title="Раннее выявление ЗНО"
              subTitle="Это важно знать каждому"
            />
            <SmallBanner
              href="/"
              imageUrl="/small-banner-2.webp"
              title="Памятка для граждан"
              subTitle="О гарантиях бесплатного оказания медицинской помощи"
            />
            <SmallBanner
              href="/"
              imageUrl="/small-banner-2.webp"
              title="Памятка для граждан"
              subTitle="О гарантиях бесплатного оказания медицинской помощи"
            />
          </div>
        </Container>
      </Section>

      <Section className="section-news py-[25px]">
        <Container>
          <div className="section-news__top flex items-center justify-between mb-4">
            <Title size="lg" text="Новости" />
            <Link className="flex items-center group" href="/news">
              <span className="pb-2 text-sm border-b transition-all duration-300 group-hover:text-primary">
                смотреть все новости
              </span>
              <ArrowUpRight
                className="mb-2 transition-all duration-300 group-hover:text-primary"
                size={15}
              />
            </Link>
          </div>

          <PostSlider loading={false} posts={posts} />
        </Container>
      </Section>

      <Section className="section-links py-[25px]">
        <Container>
          <div className="flex flex-col">
            <div className="flex gap-x-10">
              <div className="left-side flex flex-col max-w-[65%]">
                <Title size="lg" text="Полезные ссылки" className="mb-4" />
                <Links links={links} />
                <Image
                  src={"/banner-line-gosuslugi.svg"}
                  alt="banner"
                  width={1200}
                  height={600}
                  className="mt-auto"
                />
              </div>
              <div className="right-side flex-1">
                <Title size="lg" text="Документы" className="mb-4" />
                <Docs docs={docs}></Docs>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-feedback py-[25px]">
        <Container>
          <div className="flex items-start">
            <div className="flex flex-col max-w-[400px]">
              <Title size="lg" text="Обратная связь" className="mb-5" />
              <p>Пожалуйста, заполните форму, мы свяжемся с Вами в самое ближайшее время</p>
            </div>
            <FeedbackForm className="flex-1"></FeedbackForm>
          </div>
          
        </Container>
      </Section>
    </>
  );
}
