#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SKILLS_DIR="${ROOT_DIR}/skills"

if [[ ! -d "${SKILLS_DIR}" ]]; then
  echo "ERROR: skills directory not found at ${SKILLS_DIR}"
  exit 1
fi

echo "Validating skills in ${SKILLS_DIR}"

error_count=0

for skill_dir in "${SKILLS_DIR}"/*; do
  [[ -d "${skill_dir}" ]] || continue
  skill_name="$(basename "${skill_dir}")"

  # Skip template/internal folders.
  if [[ "${skill_name}" == _* ]]; then
    continue
  fi

  skill_file="${skill_dir}/SKILL.md"
  if [[ ! -f "${skill_file}" ]]; then
    echo "ERROR: Missing SKILL.md in ${skill_name}"
    error_count=$((error_count + 1))
    continue
  fi

  frontmatter_markers="$(awk '$0=="---"{c++} END{print c+0}' "${skill_file}")"
  if [[ "${frontmatter_markers}" -lt 2 ]]; then
    echo "ERROR: Missing YAML frontmatter delimiters in ${skill_name}/SKILL.md"
    error_count=$((error_count + 1))
    continue
  fi

  declared_name="$(
    awk '
      BEGIN { in_frontmatter=0; marker_count=0 }
      $0=="---" {
        marker_count++
        if (marker_count==1) { in_frontmatter=1; next }
        if (marker_count==2) { in_frontmatter=0; exit }
      }
      in_frontmatter && $0 ~ /^name:[[:space:]]+/ {
        line=$0
        sub(/^name:[[:space:]]+/, "", line)
        print line
        exit
      }
    ' "${skill_file}"
  )"

  if [[ -z "${declared_name}" || ! "${declared_name}" =~ ^[a-z0-9]+(-[a-z0-9]+)*$ ]]; then
    echo "ERROR: Invalid or missing frontmatter name in ${skill_name}/SKILL.md"
    error_count=$((error_count + 1))
  elif [[ "${declared_name}" != "${skill_name}" ]]; then
    echo "ERROR: Folder '${skill_name}' does not match frontmatter name '${declared_name}'"
    error_count=$((error_count + 1))
  fi

  description_value="$(
    awk '
      BEGIN { in_frontmatter=0; marker_count=0 }
      $0=="---" {
        marker_count++
        if (marker_count==1) { in_frontmatter=1; next }
        if (marker_count==2) { in_frontmatter=0; exit }
      }
      in_frontmatter && $0 ~ /^description:[[:space:]]+/ {
        line=$0
        sub(/^description:[[:space:]]+/, "", line)
        print line
        exit
      }
    ' "${skill_file}"
  )"

  if [[ -z "${description_value}" ]]; then
    echo "ERROR: Missing or empty description in ${skill_name}/SKILL.md"
    error_count=$((error_count + 1))
  fi
done

if [[ "${error_count}" -gt 0 ]]; then
  echo "Validation failed with ${error_count} error(s)."
  exit 1
fi

echo "Validation passed."
