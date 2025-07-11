<template>
  <BContainer>
    <BRow>
      <BCol>
        <h2 class="text-center">Администраторы</h2>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <OpenCollectiveMemberDisplayAvatarCard :members="groupedCollectiveMembers.ADMIN" />
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h2 class="text-center">Контрибьюторы</h2>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <OpenCollectiveMemberDisplayAvatarCard :members="removedDuplicatedContributors" />
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h2 class="text-center">Финансовые спонсоры</h2>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <div v-for="tier in sortTiers" :key="tier">
          <h3 class="text-center">{{ tier }}</h3>
          <OpenCollectiveMemberDisplayAvatarCard :members="groupedActiveFinancialBackers[tier]" />
        </div>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h2>
          <BPopover>
            <template #target>
              <div class="text-center">Неактивные финансовые спонсоры</div>
            </template>
            <div class="mb-2">
              Неактивный финансовый спонсор — это тот, кто не делал финансовых взносов за последний
              год.
            </div>
            <div class="mb-2">
              Мы благодарим их за прошлые взносы и надеемся, что они снова поддержат проект в
              будущем.
            </div>
            <div>
              Те, кто не делал взносов более двух лет, удаляются из списка финансовых спонсоров.
            </div>
          </BPopover>
        </h2>
      </BCol>
    </BRow>
    <BRow>
      <BCol class="text-center">
        {{ inactiveFinancialBackers.map((el) => el.name).join(', ') }}
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import {type CollectiveMembersResponse, type CollectivePartialResponse} from '../types'
// @ts-expect-error - Vitepress isn't correctly mocking the type in this case
import {data} from '../data/opencollective.data'

const OpenCollectiveData = data as CollectivePartialResponse

const filteredKeys = ['HOST', 'FOLLOWER']
const roleNames = ['ADMIN', 'CONTRIBUTOR', 'BACKER'] as const
type RoleNames = (typeof roleNames)[number]

type RoleGroups = Record<RoleNames, CollectiveMembersResponse[]>
const filteredMembers = OpenCollectiveData.members.filter((el) => !filteredKeys.includes(el.role))
const groupedCollectiveMembers: RoleGroups = {
  ...Object.fromEntries(roleNames.map((role) => [role, []])),
  ...Object.groupBy(filteredMembers, (el) => el.role),
} as RoleGroups

/**
 * Profiles are used because for some reason MemberIds are not the same between roles?
 */
const adminProfiles = new Set(groupedCollectiveMembers.ADMIN.map((adm) => adm.profile))
const removedDuplicatedContributors = groupedCollectiveMembers.CONTRIBUTOR.filter(
  (el) => !adminProfiles.has(el.profile)
)

const now = new Date()
const oneYearAgo = new Date()
const twoYearsAgo = new Date()

oneYearAgo.setFullYear(now.getFullYear() - 1)
twoYearsAgo.setFullYear(now.getFullYear() - 2)

// Active backers (within the last year)
const activeFinancialBackers = groupedCollectiveMembers.BACKER.filter((el) => {
  const lastTransactionDate = new Date(el.lastTransactionAt)
  return lastTransactionDate >= oneYearAgo
})

// Inactive backers (between one and two years ago)
const inactiveFinancialBackers = groupedCollectiveMembers.BACKER.filter((el) => {
  const lastTransactionDate = new Date(el.lastTransactionAt)
  return lastTransactionDate < oneYearAgo && lastTransactionDate >= twoYearsAgo
})

// Grouping active financial backers by tier

const tierNames = [
  'Platinum Sponsor',
  'Gold Sponsor',
  'Silver Sponsor',
  'Bronze Sponsor',
  'Sponsor',
  'Backer',
] as const

type TierNames = (typeof tierNames)[number]

type BackerGroups = Partial<Record<TierNames, CollectiveMembersResponse[]>>

const groupedActiveFinancialBackers: BackerGroups = Object.groupBy(
  activeFinancialBackers,
  (el) => el.tier
)

/**
 * The priority of the tiers
 */
const sortTiers = tierNames.filter((el) =>
  Object.keys(groupedActiveFinancialBackers)
    .map((v) => v.toLowerCase())
    .includes(el.toLowerCase())
) as (keyof BackerGroups)[]
</script>
