export default {
  global: {
    fieldset:
      'max-w-md border border-primary-300 dark:border-secondary-100 rounded-lg px-2 pb-1',
    help: 'text-xs text-primary-300',
    inner:
      'formkit-disabled:bg-secondary-200 formkit-disabled:cursor-not-allowed formkit-disabled:pointer-events-none',
    // input: '',
    label: 'block mb-1 font-bold text-sm',
    legend: 'font-bold text-sm',
    loaderIcon: 'inline-flex items-center w-4 text-secondary-300 animate-spin',
    message: 'text-warning-100 mb-1 text-xs',
    messages: 'list-none p-0 mt-1 mb-0',
    outer: 'mb-4 formkit-disabled:opacity-50 max-w-md',
    prefixIcon:
      'w-7 flex self-stretch grow-0 shrink-0 rounded-tl rounded-bl border-r border-primary-300 bg-white bg-gradient-to-b from-transparent to-secondary-200 [&>svg]:w-full [&>svg]:max-w-[1em] [&>svg]:max-h-[1em] [&>svg]:m-auto',
    suffixIcon:
      'w-7 pr-3 flex self-stretch grow-0 shrink-0 [&>svg]:w-full [&>svg]:max-w-[1em] [&>svg]:max-h-[1em] [&>svg]:m-auto',
  },
  text: {
    inner: `
      rounded-lg
      mb-1
      overflow-hidden
      formkit-invalid:border-warning-100
      formkit-invalid:text-warning-100
      focus-within:border-primary-300
      border border-primary-300
    `,
    input: 'p-2 w-full',
    help: '',
    messages: 'list-none p-0 mt-1 mb-0',
    message: 'text-warning-100 mb-1 text-xs',
  },
  button: {
    input:
      '$reset inline-flex items-center bg-accent-100 text-primary-100 py-3 px-6 rounded-lg font-bold text-sm lg:text-base tracking-wide border-2 border-white hover:border-accent-100 hover:bg-white focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 formkit-disabled:bg-primary-300 formkit-loading:before:w-4 formkit-loading:before:h-4 formkit-loading:before:mr-2 formkit-loading:before:border formkit-loading:before:border-2 formkit-loading:before:border-r-transparent formkit-loading:before:rounded-3xl formkit-loading:before:border-white formkit-loading:before:animate-spin',
    wrapper: 'mb-1 hover:drop-shadow-md',
    prefixIcon: '$reset block w-4 -ml-2 mr-2 stretch',
    suffixIcon: '$reset block w-4 ml-2 stretch',
  },
  date: {
    inner: `
        rounded-lg
        mb-1
        overflow-hidden
        formkit-invalid:border-warning-100
        formkit-invalid:text-warning-100
        focus-within:border-primary-300
        border border-primary-300
      `,
    input: 'p-2 w-full',
    help: '',
    messages: 'list-none p-0 mt-1 mb-0',
    message: 'text-warning-100 mb-1 text-xs',
  },
  tel: {
    inner: `
        rounded-lg
        mb-1
        overflow-hidden
        formkit-invalid:border-warning-100
        formkit-invalid:text-warning-100
        focus-within:border-primary-300
        border border-primary-300
      `,
    input: 'p-2 w-full',
    help: '',
    messages: 'list-none p-0 mt-1 mb-0',
    message: 'text-warning-100 mb-1 text-xs',
  },
  radio: {
    decorator: 'rounded-full',
    decoratorIcon: 'w-5 p-[5px]',
  },
  'family:box': {
    decorator:
      'block relative h-5 w-5 mr-2 rounded bg-white bg-gradient-to-b from-transparent to-gray-200 ring-1 ring-gray-400 peer-checked:ring-blue-500 text-transparent peer-checked:text-blue-500',
    decoratorIcon:
      'flex p-[3px] w-full h-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2',
    help: 'mb-2 mt-1.5',
    input:
      'absolute w-0 h-0 overflow-hidden opacity-0 pointer-events-none peer',
    inner: '$remove:formkit-disabled:bg-gray-200',
    label: '$reset text-sm text-gray-700 mt-1 select-none',
    wrapper: 'flex items-center mb-1',
  },
};
