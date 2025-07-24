import PostBody from "@/components/post/PostBody";
import { ProjectList } from "@/components/resume/project";
import Link from "next/link";
import { HTMLAttributes } from "react";

const ResumePage = async () => {
  return (
    <div className="mx-auto min-h-full w-full max-w-[800px] border-x border-gray-300 py-4">
      <Section>
        <h1 className="-mx-6 border-b border-gray-200 px-6 pb-2 text-3xl font-bold">
          전승규
        </h1>
        <div className="font-fira-mono flex flex-col gap-y-2 pt-4">
          <p>EMAIL: kyu3638@gmail.com</p>
          <p>
            GITHUB:&nbsp;
            <Link
              className="hover:underline"
              href="https://github.com/kyu3638"
              target="_blank"
            >
              https://github.com/kyu3638
            </Link>
          </p>
        </div>
      </Section>
      <Section>
        <h2 className="-mx-6 border-b border-gray-200 px-6 pb-2 text-2xl font-bold">
          # About Me
        </h2>
        <div className="flex flex-col gap-y-2 pt-4">
          <p>사용자 삶의 변화를 제공하는 서비스를 만드는 것을 좋아합니다.</p>
          <p>협업을 통해 그 과정을 빠르고 단단하게 하고자 노력합니다.</p>
          <p>
            기능 구현에 그치지 않고 아이디어 제안과 소통을 통해 발전시키는
            과정에 적극 참여합니다.
          </p>
        </div>
      </Section>
      <Section>
        <h2 className="-mx-6 border-b border-gray-200 px-6 pb-2 text-2xl font-bold">
          # Work Experience
        </h2>
        <div className="-mx-6 border-b border-gray-200 px-6 pt-4 pb-2 text-sm">
          <h3 className="text-lg font-bold">이엠시티(주)</h3>
          <p className="font-fira-mono text-gray-500">2024.05 ~ 2025.06</p>
          <p>
            고객사 설비(화재 수신기, 주차 차단기)와 IoT 기술을 접목하여 설비에
            대한 실시간 모니터링 및 원격 제어 솔루션 제공
          </p>
          <p className="pt-2 text-base font-bold">Frontend Developer</p>
          <ul className="flex list-inside list-disc flex-col gap-y-1.5">
            <li>고객사 설비 모니터링 및 원격 제어 백오피스 페이지 개발</li>
            <li>
              ASP.NET Core Razor로 구현된 백오피스 페이지를 React로 마이그레이션
            </li>
            <li>
              주차관제 서비스(
              <Link
                className="font-medium underline hover:font-bold active:bg-gray-500"
                href="https://bdpark.kr"
                target="_blank"
              >
                BDPark
              </Link>
              ) 개발 및 유지보수
            </li>
            <li>번들러 마이그레이션({`webpack -> vite`})</li>
            <li>storybook 도입으로 타부서와 협업 및 개발시간 단축</li>
          </ul>
        </div>
        <div className="pt-4 text-sm">
          <h3 className="text-lg font-bold">김포상공회의소(비개발)</h3>
          <p className="font-fira-mono text-gray-500">2017.12 ~ 2023.03</p>
          <p className="pt-2 text-base font-bold">기업지원사업 기획/운영</p>
          <ul className="flex list-inside list-disc flex-col gap-y-1.5">
            <li>김포시 해외시장 개척단 기획 및 운영</li>
            <li>김포시건설관련기업인협의회 운영</li>
          </ul>
        </div>
      </Section>
      <Section>
        <h2 className="-mx-6 border-b border-gray-200 px-6 pb-2 text-2xl font-bold">
          # Education
        </h2>
        <div className="-mx-6 border-b border-gray-200 px-6 pt-4 pb-2 text-sm">
          <h3 className="text-lg font-bold">크래프톤 정글</h3>
          <p className="font-fira-mono text-gray-500">2023.04 ~ 2023.08</p>
          <ul className="flex list-inside list-disc flex-col gap-y-1.5">
            <li>자료구조 및 알고리즘</li>
            <li>네트워크, CS 학습</li>
            <li>최종 프로젝트: 홈술포차 - 비대면 술자리 서비스</li>
          </ul>
        </div>
        <div className="pt-4 text-sm">
          <h3 className="text-lg font-bold">중앙대학교</h3>
          <p className="font-fira-mono text-gray-500">2009.03 ~ 2018.02</p>
          <ul className="flex list-inside list-disc flex-col gap-y-1.5">
            <li>경제학 학사</li>
          </ul>
        </div>
      </Section>
      {/* Skill을 넣을까? */}
      {/* <Section>
        <h2 className="-mx-6 border-b border-gray-200 px-6 pb-2 text-2xl font-bold">
          # Skills
        </h2>
        <div className="flex gap-4 pt-4 text-sm font-medium">
          <span className="rounded-md border border-gray-300 px-2 py-1">
            Javascript
          </span>
          <span className="rounded-md border border-gray-300 px-2 py-1">
            Typescipt
          </span>
          <span className="rounded-md border border-gray-300 px-2 py-1">
            React
          </span>
        </div>
      </Section> */}
      <Section>
        <h2 className="-mx-6 border-b border-gray-200 px-6 pb-2 text-2xl font-bold">
          # Projects
        </h2>
        <ProjectList />
      </Section>
    </div>
  );
};

export default ResumePage;

const Section = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <section
      className={`border-b border-gray-300 px-6 py-4 ${className ?? ""}`}
      {...props}
    >
      {children}
    </section>
  );
};
