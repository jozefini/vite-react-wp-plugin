import { ReactComponent as CodeIcon } from './assets/icons/code.svg';

export function App() {
	return (
		<div className="px-4 py-10 flex flex-col items-center justify-center">
			<h1 className="text-red-500 text-5xl font-bold">Hello World</h1>
			<div className="mt-4">
				<CodeIcon className="w-10 h-10 text-red-500" />
			</div>
		</div>
	);
}
