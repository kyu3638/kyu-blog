import { ProjectMatter, ProjectType } from "@/config/types/resume";
import { getProjectList } from "@/lib/project";
import { Modal } from "../ui/Modal";
import PostBody from "../post/PostBody";

export const ProjectList = async () => {
  const projectList = await getProjectList();

  const isOdd = projectList.length % 2 === 1;
  return (
    <div className="-mb-4 grid grid-cols-1 border-r border-l border-gray-300 pt-4 pb-4 text-sm lg:grid-cols-2 [&>*]:border-b [&>*:nth-child(-n+1)]:border-t lg:[&>*:nth-child(-n+2)]:border-t lg:[&>*:nth-child(odd)]:border-r">
      {projectList.map((project) => {
        return (
          <Modal.Trigger
            key={project.projectMatter.title}
            render={
              <ProjectModal
                projectMatter={project.projectMatter}
                content={project.content}
              />
            }
          >
            <ProjectItem projectMatter={project.projectMatter} />
          </Modal.Trigger>
        );
      })}
      {isOdd && <div className="hidden border-gray-300 lg:block"></div>}
    </div>
  );
};

const ProjectItem = ({
  projectMatter: { title, description, skillList },
}: {
  projectMatter: ProjectMatter;
}) => {
  return (
    <div className="flex flex-col gap-y-1.5 border-gray-300 p-4">
      <h3 className="text-lg font-bold">{title}</h3>
      <div>{description}</div>
      <div className="flex flex-wrap gap-2">
        {skillList.map((skill) => {
          return (
            <span
              key={skill}
              className="font-fira-mono border border-gray-300 px-1.5 py-0.5 text-xs font-medium"
            >
              {skill}
            </span>
          );
        })}
      </div>
    </div>
  );
};

const ProjectModal = ({ projectMatter, content }: ProjectType) => {
  return (
    <Modal.Overlay>
      <Modal.Content>
        <Modal.Header>
          {/* 추가정보 정리 필요 */}
          <h2 className="text-center text-2xl font-bold">
            {projectMatter.title}
          </h2>
        </Modal.Header>
        <Modal.Body>
          <PostBody content={content} />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal.Content>
    </Modal.Overlay>
  );
};
