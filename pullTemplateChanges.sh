echo "Checking to see if you have the template remote added"

if ! git ls-remote --exit-code template; then
	# we need to add the remote
	echo "template remote not found — adding remote"
	git remote add template https://github.com/acmucsd/static-template/
else
	echo "template remote found"
fi

echo "pulling all changes"
if ! git fetch --all; then 
	echo "failed to fetch changes"
	exit 1
fi

echo "merging changes from template repo"
if git merge template/main --allow-unrelated-histories; then
	echo "complete! you likely have many merge conflicts — resolve these before moving on"
else
	echo "failed to merge"
fi
