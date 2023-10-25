const iframe = document.querySelector("#botscrew-chat-frame");
const branchURLInput = document.querySelector(".vercelUrl");
const submitBranchURLButton = document.querySelector(".submitVercelUrlBtn");

const handleSubmitClick = () => {
  const inputValue = branchURLInput.value;
  const currentSrcURL = new URL(iframe.src);
  const { search } = currentSrcURL;
  iframe.src = "https://" + inputValue + `/${search}`;
};

submitBranchURLButton.addEventListener("click", handleSubmitClick);
