import Link from 'next/link';
import Animation from './animation'

export default function Hero() {
    return (
        <>
            <Animation />
            <div className="text-center lg:w-2/3 w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">생각하고 행동하는 개발자 송지훈 입니다</h1>
                <div className="flex justify-center">
                    <Link href="/projects" legacyBehavior>
                        <a className="btn-project">프로젝트 보러가기</a>
                    </Link>

                </div>
            </div>
        </>
    )
}