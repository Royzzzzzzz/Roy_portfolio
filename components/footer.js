import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <Link href="/" legacyBehavior>
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <span className="ml-3 text-xl">저의 포트폴리오를 봐주셔서 감사합니다</span>
                        </a>
                    </Link>

                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">땡큐떙큐
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

                    </span>
                </div>
            </footer>
        </>
    )
}