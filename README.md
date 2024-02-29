# Actions

Github Composite Actions for PON Developers.

Anybody working at PON is welcome to contribute to this repository, including,
but not limited to: New Action(s), updates to actions. Do not hesitate to mail
or otherwise contact one of the regular maintainers if you do not get a reaction
within 10 work-days.

## Versioning

We'll be introducing versioning within the repository. We'll attempt to closely
adhere to github's [recommendation][gh-versioning]. This means we'll use
semantic versioning, making reasonable guess-work to assess impact of
dependencies on our own compatibility.

#### @v[n]

To be reasonably protected against breaking changes, you should be able to rely
on the latest major release, for example `@v1`. This tag will be moved to the
latest minor/patch release and should be safe.

#### @main

If you really aren't worried about breaking changes, you can keep up to date
with the latest release by using `@main`. Should breaking changes occur in your
build, you can quickly resolve be checking which release was available on the
last successful build and update your own config accordingly.`@v0` is the first
tagged version, created just before we've introducing versioning.

In case of a critical update in one of the dependencies of this repository, you
can also directly use an existing dependabot branch as your version. Or create a
new branch, with required updates. In the latter case it'd be appreciated if you
also create a PR and send a dm to one of the maintainers.

#### @[SHA]

If you're really paranoid about breaking changes (you'll need to worry about
deprecation though), you van depend on git-SHA instead. The latest SHA before we
started versioning and regular dependabot updates is
`@e3ff38d7abdb88571971441b8da41e4db94288ae`.

### Dependabot impact

Dependabot will be used to do a monthly sweep of our action's dependencies. The
person responsible for merging PR's from dependabot is also responsible for
updating version-tags. Most likely this means regular minor version increases.

We're expecting to merge dependabot's PR's in batches and do minor version
updates for the entire batch. Future impact may of course make us change this
way of working.

### Major version

The major version tag should be manually moved to the latest minor release, as
per github [recommendation][gh-versioning]. This is the responsibility of the
person creating a new minor-tag.

[gh-versioning]: https://docs.github.com/en/actions/creating-actions/about-custom-actions#using-tags-for-release-management